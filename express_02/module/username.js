let username = (req, res, next) => {
  console.log(req.query)
  if (req.query.username === 'jj') {
    // 继续执行
    next()
  } else {
    res.send('username is not found')
  }
}

module.exports = username
