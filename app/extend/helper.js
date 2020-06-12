'use strict';

/*
const moment = require('moment')
// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss')
*/

// 处理成功响应
exports.success = ({ res = null, msg = '请求成功' }) => {
  return {
    code: 1000,
    data: res,
    msg,
  };
}
