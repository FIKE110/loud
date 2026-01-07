import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await sql`ALTER TYPE package_enum ADD VALUE 'UNLIMITED_PROJECT_ACCESS'`.execute(db)
  await sql`ALTER TYPE package_enum ADD VALUE 'UNLIMITED_MARKETING_ACCESS'`.execute(db)
  await sql`ALTER TYPE package_enum ADD VALUE 'CREATORS_PACK'`.execute(db)

  await db.insertInto('packages').values([
    { code: 'UNLIMITED_PROJECT_ACCESS', name: 'Unlimited Project Access', description: 'Unlimited Project Access', launch_price: 3000.00 },
    { code: 'UNLIMITED_MARKETING_ACCESS', name: 'Unlimited Marketing Access', description: 'Unlimited Marketing Access', launch_price: 3000.00 },
    { code: 'CREATORS_PACK', name: 'Creator\'s Pack', description: 'Creator\'s Pack', launch_price: 2000.00 },
  ]).execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    // there is no easy way to remove enum values in postgres
    // so we will just delete the packages
    await db.deleteFrom('packages').where('code', 'in', ['UNLIMITED_PROJECT_ACCESS', 'UNLIMITED_MARKETING_ACCESS', 'CREATORS_PACK']).execute()
}