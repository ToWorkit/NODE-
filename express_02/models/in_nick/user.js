// 数据处理

const users = [];

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  static insert(firstName, lastName, age) {
    const u = new User(firstName, lastName, age)
    User.users.push(u)
    return u;
  }

  static list(query) {
    return User.users;
  }
  
  // User.users => get ['users']
  static get ['users'] () {
    return users;
  }
  
}

module.exports = User;
