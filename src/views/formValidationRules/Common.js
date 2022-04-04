exports.usernameRule = {
    validateOnEmpty: false,
    min:{
      length: 5,
      get message() { return `Must be at least ${this.length || 3} character long!` },
      force_show: true
    },
    max:{
      length: 15,
      get message() { return `Maximum ${this.length || 10} character long!` },
      force_show: true
    }
}

exports.passwordRuleRegister = {
    validateOnEmpty: false,
    min:{
      length: 5,
      get message() { return `Must be at least ${this.length || 3} character long!` },
      force_show: true
    },
    equal: {
      message: 'The two fields must be equal!',
      force_show: true
    }
}

exports.passwordRuleLogin = {
  validateOnEmpty: false,
  min:{
    length: 5,
    get message() { return `Must be at least ${this.length || 3} character long!` },
    force_show: true
  }
}