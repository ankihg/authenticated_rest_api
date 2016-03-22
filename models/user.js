'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (mongoose, models) => {

  let userSchema = new mongoose.Schema({
    name: String,
    password: String
  });

  userSchema.pre('save', (next) => {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    next();
  });

  userSchema.methods.generateToken = function() {
    return jwt.sign({_id: this._id}, 'CHANGE ME');
  }

  models.User = mongoose.model('User', userSchema);

};
