'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async find(user) {
    const result = await this.app.mysql.get('user', { username: user.username, password: user.password });
    return result;
  }
  async create(user) {
    const result = await this.app.mysql.insert('user', { username: user.username, password: user.password });
    return result;
  }
}

module.exports = UserService;
