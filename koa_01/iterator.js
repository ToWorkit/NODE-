function makeIterator (arr) {
  let nextIndex = 0

  // 返回一个迭代器对象
  return {
    next: () => {
      // next() 方法返回的结果对象
      if (nextIndex < arr.length) {
        return { value: arr[nextIndex++], done: false }
      } else {
        return { done: true }
      }
    }
  }
}


const it = makeIterator(['吃饭', '睡觉', '打豆豆'])

console.log('1', it.next().value)
console.log('2', it.next().value)
console.log('3', it.next().value)
console.log('4', it.next().value, it.next().done)


console.log('-----------------')


// 迭代器
function *makeIterator_02 (arr) {
  for (let i = 0; i < arr.length; i ++) {
    yield arr[i]
  }
}

const it_02 = makeIterator_02(['吃饭', '睡觉', '打豆豆'])

console.log('1', it_02.next().value)
console.log('2', it_02.next().value)
console.log('3', it_02.next().value)
console.log('4', it_02.next().value, it_02.next().done)
