const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')

const indent = (n) => new Array(n).join('&nbsp;')


const mid1 = () => {
  return async (ctx, next) => {
    ctx.body = `<h2>${indent(2)}请求，第一层中间件</h2>`
    await next()
    ctx.body += `<h2>${indent(2)}响应，第一层中间件</h2>`
  }
}

const mid2 = () => {
  return async (ctx, next) => {
    ctx.body += `<h2>${indent(4)}请求，第二层中间件</h2>`
    await next()
    ctx.body += `<h2>${indent(4)}响应，第二层中间件</h2>`
  }
}

const mid3 = () => {
  return async (ctx, next) => {
    ctx.body += `<h2>${indent(8)}请求，第三层中间件</h2>`
    await next()
    ctx.body += `<h2>${indent(8)}响应，第三层中间件</h2>`
  }
}

app.use(logger())
app.use(mid1())
app.use(mid2())
app.use(mid3())

app.use(async (ctx, next) => {
  ctx.body += `<p style='color: red'>${indent(12)}Koa 处理业务</p>`
})

app.listen(9090)
