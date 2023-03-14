
import { Dwn, Encoder, MessageReply } from '@tbd54566975/dwn-sdk-js';
import Koa from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';
import { Readable } from 'readable-stream';

console.log(`Instantiating DWN...`);
const dwn = await Dwn.create();

console.log(`Instantiating koa...`);
const app = new Koa();

// allow CORS, MUST be the first middleware
app.use(cors());

console.log(`Setting up routes...`);
const router = new Router();
router.post('/:did', async (ctx, _next) => {
  const did = ctx.params.did;
  const dwnMessageHeader = ctx.headers['dwn-message'] as string;
  const dwnMessage = Encoder.base64UrlToObject(dwnMessageHeader);
  const messageReply = await dwn.processMessage(did, dwnMessage, ctx.req as unknown as Readable);
  setKoaResponse(messageReply, ctx.response);
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
const setKoaResponse = (messageReply: MessageReply, koaResponse: Koa.Response) => {
  koaResponse.status = messageReply.status.code;

  koaResponse.set('Content-Type', 'application/json');
  koaResponse.body = messageReply.entries ?? messageReply.status.detail;
};
