const fs = require('fs')

// 之前写法 记得 => return 
// function readFileAsync (path) {
/*let readFileAsync = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err) 
      else resolve(data)
    })
  })
}

readFileAsync('./package.json').then(data => {
  data = JSON.parse(data)
  console.log(data.name)
}).catch(err => {
  console.log(err)
})*/

// 8.x 以后使用util库中的promisify
// 包装回调传入参数

const util = require('util')

util.promisify(fs.readFile)('./package.json')
  .then(JSON.parse)
  .then(data => {
    console.log(data.name)
  })
  .catch(err => {
    console.log(err)
  })

