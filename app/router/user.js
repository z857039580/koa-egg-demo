'use strict';

module.exports = app => {
  const apiPrefix = '/api/v1/user';
  const { router, controller } = app;

  router.post(apiPrefix + '/login', controller.user.login);
  router.post(apiPrefix + '/register', controller.user.register);
};
