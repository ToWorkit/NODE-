// generator
// iterator
// co 不再需要手动执行next(), 自动执行
const co = require('co')
// fetch请求
const fetch = require('node-fetch')

/*co(function *() {
  const res = yield fetch('https://api.douban.com/v2/movie/1291843')
  const movie = yield res.json()
  const summary = movie.summary

  console.log('summary', summary)
})*/

function run(generator) {
  const iterator = generator()
  const it = iterator.next()
  const promise = it.value

  promise.then(data => {
    const it2 = iterator.next(data)
    const promise2 = it2.value

    promise2.then(data2 => {
      iterator.next(data2)
    })
  })
}

run(function *() {
  const res = yield fetch('https://api.douban.com/v2/movie/1291843')
  const movie = yield res.json()
  const summary = movie.summary

  console.log('summary', summary)
})
