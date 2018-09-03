async function foo() {
  console.log(2)
  const r = await bar()
  console.log(r)
  console.log(3)
}

async function bar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('test')
    }, 2000)
  })
}

console.log(1)

foo()
