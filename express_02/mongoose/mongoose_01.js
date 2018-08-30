const mongoose = require('mongoose');
mongoose.Promise = Promise;
const url = `mongodb://127.0.0.1:27017/test`;
const connection = mongoose.connect(url);
const db = mongoose.connection;

const Schema = mongoose.Schema;

// 取
const ObjectId = Schema.Types.ObjectId;
// 设置
// const ObjectId = mongoose.Types.ObjectId;


// 数据库对象集合
const UserSchema = new Schema({
  name: {
    type: String,
    // 申请一个新的字段
    required: true,
    // 只可以存在一条该数据(mongodb的索引机制，保证数据的唯一性)
    unique: true,
    // 排序
    index: 1,
  },
  age: {
    type: Number,
    max: 100,
    min: 0
  },
});

const UserModel = mongoose.model('users', UserSchema);

(async () => {

  // 创建
  /*  const user = await UserModel.create({
      name: 'lo',
      age: 20,
    });*/
  
  // 条件查询
  // const user = await UserModel.find({name: 'lo' }, { });

  return user;
})()
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  });

db.on('open', () => {
  console.log('db connected');
});

db.on('error', (e) => {
  console.log(e)
})
