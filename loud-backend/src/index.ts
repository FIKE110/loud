import { Hono } from 'hono';
import {cors} from 'hono/cors'
import { logger } from 'hono/logger';
import paystack from './paystack';
import user from './user';
import webhook from './webhook';

const app = new Hono();

const frontend_url=process.env.FRONTEND_URL || "http://localhost:5173"

app.use(cors({origin:frontend_url}))

app.get('/', (c) => {
  return c.text('Hello Bun!');
});

app.use(logger());
app.route('/api/paystack', paystack);
app.route('/api/user', user);
app.route('/api/v1/payment/webhook/paystack', webhook);

export default app;