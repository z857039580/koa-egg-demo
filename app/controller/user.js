'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.find(ctx.request.body);
    ctx.body = ctx.helper.success({ res: userInfo });
  }
  async register() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.create(ctx.request.body);
    ctx.body = ctx.helper.success({ res: userInfo });
  }
}

module.exports = UserController;
