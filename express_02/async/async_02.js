(async () => {
  async function dealWithObjAsync(obj) {
    return new Promise((resolve) => {
      setTimeout(() => {
        obj.dealt = true;
        resolve();
      }, 2000)
    })
  }

  const obj = {}
  console.log(obj)

  await dealWithObjAsync(obj)
  console.log(obj)

})()
  .then(res => {

  })
  .catch(err => {

  })
