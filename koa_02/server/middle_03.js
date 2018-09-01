function tail (i) {
  if (i > 3) return
  console.log('修改前' + i)
  tail(i + 1)
  console.log(`修改后${i}`)
}
tail(0)

/* 
修改前0
修改前1
修改前2
修改前3
修改后3
修改后2
修改后1
修改后0
*/
