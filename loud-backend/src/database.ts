import { Database } from './types' 
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'


const connectionString=process.env.DB_URL

const pool = new Pool(connectionString ?{
    connectionString,
    max:10
} : {
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    max: 10,
  })

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

pool.connect().then(() => {
  console.log('Connected to the database')
}).catch((err) => {
  console.error('Failed to connect to the database', err)
})
  

const dialect = new PostgresDialect({
  pool,
})

export const db = new Kysely<Database>({
  dialect,
})