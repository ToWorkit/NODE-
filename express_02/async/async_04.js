/**
 * 1. 从mongodb中取出某个用户信息
 * 2. 根据用户的年龄决定下面流程
 * 2.1 年龄小于18岁，进入防沉迷系统
 * 2.2 年龄大于18岁，查看是否为真实身份证
 * 3. 根据用用户的信息，查询是否在游戏中达到一定等级，如果达到，显示不同的登录界面
 * 4. 根据2的结果，进入游戏
 */

function getUserInfoFromDB(userId, callback) {
  const user = { age: 0 }
  user.age = 18 + Math.ceil(Math.random() * 3 - 1.5)
  setTimeout(() => {
    callback(null, user)
  }, 1000)
}

const MAX_USER_ADDCTION_CONTROL_AGE = 18

// 正常
function isIdentityCardValid(user, callback) {
  setTimeout(() => {
    callback(null, true)
  }, 1000)
}

// 防沉迷
function enterAddictionControlSys(user, cb) {
  setTimeout(() => {
    cb(null, true)
  }, 1000)
}

getUserInfoFromDB('userId1', (err, user) => {
  if (err) {
    console.log('error getting user', err)
    return
  }

  if (user.age > MAX_USER_ADDCTION_CONTROL_AGE) {
    isIdentityCardValid(user, (err, valid) => {
      if (valid) {
        console.log('done')
      } else {
        enterAddictionControlSys(user, (err, result) => {
          console.log('invalid id, enter ACS')
        })
      }
    })
  } else {
    enterAddictionControlSys(user, (err, result) => {
      console.log('age under 18, enter ACS')
    })
  }
})
