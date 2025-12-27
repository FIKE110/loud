import { z } from 'zod'

const schema = z.object({
  email: z.email({ error: 'A valid Email is required' }),
  first_name: z.string({ error: 'First name is required' }),
  last_name: z.string().nullable(),
  gender: z.enum(['male', 'female', 'rather not say'], { error: 'Gender is required' }),
  package_code: z.enum(['FREEMIUM','OFFER_1', 'OFFER_2', 'OFFER_3', 'OFFER_4'], { error: 'A valid package code is required' }),
});


const schemaIntializeOnly = z.object({
  email: z.email({ error: 'A valid Email is required' }),
  package_code: z.enum(['FREEMIUM','OFFER_1', 'OFFER_2', 'OFFER_3', 'OFFER_4'], { error: 'A valid package code is required' }),
});

export type InitializeRequestBody = z.infer<typeof schema>;
export type InitializeRequestBodyOnly = z.infer<typeof schemaIntializeOnly>;

export { schema, schemaIntializeOnly };