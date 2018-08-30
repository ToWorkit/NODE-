function foo(params, callback) {
  console.log(1)
  setTimeout(() => {
    callback(null, 'key')
  }, 2000)
  console.log(2)
}

foo({}, (err, result) => {
  console.log(result)
  console.log(4)
})

console.log(3)
