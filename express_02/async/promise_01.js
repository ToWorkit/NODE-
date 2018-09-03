// pending -> resolved/rejected
/**
  进行中：pending（也是unsettled）

  异步操作结束：settled

  操作结束以后进入两个状态：

  Fulfilled异步操作完成

  Rejected未能成功完成
 */

/*const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1);
    resolve('done');
  }, 2000)
});

console.log(`promise${p}`);

p.then(res => {
    console.log(`result: ${res}`)
  })
  .catch(err => {

  })*/

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1)
    resolve('1 done')
  }, 2000)
})

console.log(`promise ${p}`)

p.then(res => {
    console.log(res)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(2)
        resolve('2 done')
      }, 1000)
    })
  })
  .then(res => {
    console.log(res)
  })
  .catch(err => {

  })


/* 
promise [object Promise]
1
1 done
2
2 done
*/
