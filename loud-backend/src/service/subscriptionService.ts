
import { db } from '../database'
import { NewSubscription, Subscription } from '../types'

export async function createSubscription(subscription: NewSubscription): Promise<Subscription> {
    return await db.insertInto('subscription')
        .values(subscription)
        .returningAll()
        .executeTakeFirstOrThrow()
    }

export async function findSubscriptionByEmail(email: string): Promise<Subscription | undefined> {
    return await db.selectFrom('subscription')
        .where('email', '=', email)
        .selectAll()
        .executeTakeFirst()
    }
