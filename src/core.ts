import { DWN } from '@TBD54566975/dwn-sdk-js';
import Koa from 'koa';
import { Response } from '@tbd54566975/dwn-sdk-js/dist/esm/src/core';
import Router from 'koa-router';
import cors from '@koa/cors';
import getRawBody from 'raw-body';

const dwn = await DWN.create({ });
const app = new Koa();

// allow CORS, MUST be the first middleware
app.use(cors());

// Raw body parser.
app.use(async (ctx, next) => {
  ctx.body = await getRawBody(ctx.req);
  await next();
});

const router = new Router();
router.post('/', async (ctx, _next) => {
  const response = await dwn.processRequest(ctx.body);
  setKoaResponse(response, ctx.response);
});

app.use(router.routes())
  .use(router.allowedMethods());

// Handler to return bad request for all unhandled paths.
app.use((ctx, _next) => {
  ctx.response.status = 400;
});

try {
  const port = 3000;
  app.listen(port, () => {
    console.log(`DWN running on port: ${port}`);
  });
} catch (error) {
  const serializedError = JSON.stringify(error, Object.getOwnPropertyNames(error));
  console.log(`DWN initialization failed with error ${serializedError}`);
  process.exit(1);
}

/**
 * Sets the koa response according to the DWN response object given.
 */
const setKoaResponse = (response: Response, koaResponse: Koa.Response) => {
  koaResponse.status = response.status ? response.status.code : 200;

  koaResponse.set('Content-Type', 'application/json');
  koaResponse.body = JSON.stringify(response);
};
