import { Hono } from "hono";
import { findUserByEmail, saveUser } from "../service/userService";
import { findPreorderByUserId, savePreorder } from "../service/preorderService";
import z from "zod";
import {  schema } from "../schema/initSchema";
import { findPackagePriceByPackageCode } from "../service/packageService";
import { usdToNaira } from "../service/utils";

const user = new Hono();

user.get("/:email", async (c) => {
  try {
    const schema = z.email({ error: "Not a valid email" });
    const email = schema.parse(c.req.param().email);
    const user = await findUserByEmail(email);

    if (!user)
      return c.json({
        status: false,
        preorder: false,
        message: "User does not have a profile",
      });

    const preorder = await findPreorderByUserId(user.id);

    if (preorder && preorder.status === 'PAID')
      return c.json({
        status: true,
        preorder: true,
        message: "User has a preorder ,Check your email for future responses",
      });

    return c.json({
      status: true,
      preorder: false,
      message: "User does not have any preorder",
    });
  } catch (e: any) {
    return c.json({ error: e.message });
  }
});

user.post("/register-and-pay", async (c) => {
  try {
    const body = schema.parse(await c.req.json());
    const { first_name, last_name, email, gender, package_code } = body;

    let user = await findUserByEmail(email);

    if (!user) {
      user = await saveUser({
        first_name,
        last_name,
        email,
        gender,

      });
    }

    if (!user) {
      return c.json({ error: "Failed to create or find user" }, 500);
    }

    const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!paystackSecretKey) {
      return c.json({ error: "Paystack secret key not configured" }, 500);
    }

    const amount = await findPackagePriceByPackageCode(package_code);

    if (!amount) {
      return c.json({ error: "Invalid package code" }, 400);
    }

    const paystackResponse = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${paystackSecretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: usdToNaira(amount.launch_price) ,
          callback_url: "http://localhost:5173/payment-success",
          metadata: {
            package_code,
          },
        }),
      }
    );

    const data = await paystackResponse.json();

    if (!paystackResponse.ok) {
      return c.json(
        { error: "Failed to initialize transaction", details: data },
        500
      );
    }

    await savePreorder({
        user_id: user.id,
        package_code,
        package_price: amount.launch_price,
        status: 'PENDING',
        payment_reference: data.data.reference,
      });

    return c.json(data.data);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
});

export default user;