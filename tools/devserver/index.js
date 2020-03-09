let Router = require('koa-better-router')
let router = Router().loadMethods()
const fs = require('fs')
const Koa = require('koa')
const app = new Koa()

fs.readdirSync('./lambdas').forEach(lambda => {
  let config = JSON.parse(fs.readFileSync(`./lambdas/${lambda}/serverless.json`, 'utf-8'))
  for (name in config) {
    config[name].events.forEach(evt => {
      console.log(evt.http)
      const handler = require(`../../lambdas/${lambda}/index.js`).handler
      router.addRoute(evt.http.method.toUpperCase(), `${evt.http.path}`, async (ctx, next) => {
        ctx.body = await handler(ctx)
        await next()
      })
    })
  }
})
app.use(router.middleware())
app.use((ctx, next) => {
  ctx.status = ctx.body.statusCode
  for (header in ctx.body.headers) {
    ctx.set(header, ctx.body.headers[header])
  }
  ctx.body = ctx.body.body
})
app.listen(3322)
