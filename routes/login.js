'use strict';
const jwt = require('jsonwebtoken');

module.exports = (router, models) => {

  let User = models.User;

  router.post('/login', (req, res) => {
    console.log('plz login');
    console.log(req.headers.authorization);
  });

};
