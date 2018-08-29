// generator
// iterator
// co 不再需要手动执行next(), 自动执行
const co = require('co')
// fetch请求
const fetch = require('node-fetch')

co(function *() {
  const res = yield fetch('https://api.douban.com/v2/movie/1291843')
  const movie = yield res.json()
  const summary = movie.summary

  console.log('summary', summary)
})
