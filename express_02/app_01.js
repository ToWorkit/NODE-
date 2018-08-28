// 中间件
const express = require('express');
const app = express();

// 中间件
app.use((req, res, next) => {
  // 在req到res的生命周期中做出一些业务处理
  console.log("01")
  // 处理完成后使用 next() 传入下一个中间件
  next()
})

app.use((req, res) => {
  console.log('02')
  res.send('express')
})

app.listen(9090)

