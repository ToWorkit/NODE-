const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = "LIKE"
})

app.listen(9090)
