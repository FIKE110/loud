import { Hono } from 'hono';
import { InitializeRequestBody, InitializeRequestBodyOnly, schema, schemaIntializeOnly } from './schema/initSchema';
import { findPackagePriceByPackageCode } from './service/packageService';
import { findUserByEmail } from './service/userService';
import { findPreorderByUserId, savePreorder } from './service/preorderService';
import crypto from 'crypto';
import { usdToNaira } from './service/utils';



const paystack = new Hono();

paystack.post('/initialize', async (c) => {
  try{
    const { email, package_code }: InitializeRequestBodyOnly =  schemaIntializeOnly.parse(await c.req.json());
    if (!email || !package_code) {
      return c.json({ error: 'Email and package code are required' }, 400);
    }


    const user=await findUserByEmail(email);

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    const preorder = await findPreorderByUserId(user.id);

    if (preorder && preorder.status === 'PAID') {
      return c.json({ error: 'User already has a paid preorder' }, 400);
    }
  

    const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!paystackSecretKey) {
      return c.json({ error: 'Paystack secret key not configured' }, 500);
    }

    const amount = await findPackagePriceByPackageCode(package_code);

    if (!amount) {
      return c.json({ error: 'Invalid package code' }, 400);
    }

      const paystackResponse = await fetch('https://api.paystack.co/transaction/initialize', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${paystackSecretKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          amount: usdToNaira(amount.launch_price),//in Kobo,
          callback_url: `${process.env.FRONTEND_URL}/payment-success`,
        }),
      });
      const data = await paystackResponse.json();

      if (!paystackResponse.ok) {
        return c.json({ error: 'Failed to initialize transaction', details: data }, 500);
      }

      await savePreorder({
        user_id: user.id,
        package_code,
        package_price: amount.launch_price,
        status: 'PENDING',
        payment_reference: data.data.reference,
      });

      return c.json(data.data);
    } catch (error:any) {
      return c.json({ error: error.message }, 500);
    }
});

paystack.get('/verify/:reference', async (c) => {
  const { reference } = c.req.param();
  const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;

  if (!paystackSecretKey || paystackSecretKey === 'YOUR_PAYSTACK_SECRET_KEY_GOES_HERE') {
    return c.json({ error: 'Paystack secret key not configured' }, 500);
  }

  try {
    const paystackResponse = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${paystackSecretKey}`,
      },
    });

    const data = await paystackResponse.json();

    if (!paystackResponse.ok) {
      return c.json({ error: 'Failed to verify transaction', details: data },  500);
    }

    if(data.data.status !== 'success'){
      return c.json({ error: 'Transaction not successful', details: data }, 400);
    }

    const user=await findUserByEmail(data.data.customer.email);

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    const preorder = await findPreorderByUserId(user.id);


    if (!preorder) {
      return c.json({ error: 'Preorder not found' }, 404);
    }
    if (preorder.payment_reference !== reference) {
      return c.json({ error: 'Payment reference does not match preorder' }, 400);
    }

    return c.json({preorder: preorder.package_code, status: data.data.status ,email: data.data.customer.email});
  } catch (error) {
    return c.json({ error: 'An internal error occurred' }, 500);
  }
});



export default paystack;
