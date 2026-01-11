
import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { createSubscription, findSubscriptionByEmail } from '../service/subscriptionService'
import { sendWelcomeMail } from '../service/mailService'

const subscription = new Hono()

const subscriptionSchema = z.object({
    email: z.email(),
})

subscription.post(
    '/',
    zValidator('json', subscriptionSchema),
    async (c) => {
        const { email } = c.req.valid('json')

        const existingSubscription = await findSubscriptionByEmail(email)

        if (existingSubscription) {
            return c.json({
                message: 'You are already subscribed.'
            }, 400)
        }

        const newSubscription = await createSubscription({ email })
        await sendWelcomeMail(
            email,
        )

        return c.json({
            message: 'You have successfully subscribed for further updates.'
        })
    }
)

export default subscription
