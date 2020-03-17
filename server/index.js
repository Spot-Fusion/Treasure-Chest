const Koa = require('koa');
const cors = require('koa-cors');
const Router = require('koa-router');
const Logger = require('koa-logger');

const app = new Koa();
const router = new Router();

// Response to the World to the GET requests
router.get('/', async (ctx) => {
  ctx.body = 'Hello, World!\n';
  console.log(ctx.body);
});

// Development logging
app.use(Logger());

app.use(cors());
// Add routes and response to the OPTIONS requests
app.use(router.routes()).use(router.allowedMethods());

// Listen the port
app.listen(3000, () => {
  console.log('Server running on port 8080');
});