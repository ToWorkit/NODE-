const express = require('express')
const router = express.Router()

router.use('/', (req, res, next) => {
  console.log('01_router')
  // 会结束当前 router(上层的引入), 不会打印02
  next('router')
})

router.use('/', (req, res, next) => {
  console.log('02_router')
  next()
})

module.exports = router
