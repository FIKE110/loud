import { Hono } from "hono";
import { findUserByEmail } from "./service/userService";
import crypto from "crypto";
import { findPreorderByUserId, savePreorder, updatePreorderStatus } from "./service/preorderService";
import { nairaToUsd, usdToNaira } from "./service/utils";

const webhook = new Hono();

webhook.post("/2fc6ad05-7137-4504-bc55-63543bfa6535", async (c) => {
  try {


    const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;
      if (!paystackSecretKey) {
        return c.json({ error: 'Paystack secret key not configured' }, 500);
      }
      
      const hash = crypto.createHmac('sha512', paystackSecretKey).update(JSON.stringify(await c.req.json())).digest('hex');
      if (hash != c.req.header('x-paystack-signature')) {
        return c.json({ status: 'ok' });
      }
    
      const payload = await c.req.json();

     if (payload.event === "charge.success") {
      const { email } = payload.data.customer;
        const { reference, amount } = payload.data;

        const convertedAmount = amount;
      const user = await findUserByEmail(email);

      if (user) {
        const preorder = await findPreorderByUserId(user.id);
        if (preorder && preorder.status !== 'PAID' && preorder.payment_reference === reference && convertedAmount === usdToNaira(preorder.package_price)) {
          await updatePreorderStatus(user.id, 'PAID');
        }

      }
    }

    return c.json({ status: "ok" });
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
});

export default webhook;