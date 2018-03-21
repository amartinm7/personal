'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CDA_ACCESS_TOKEN: '"231f375dec4d5d19fde180fe6230fe6fab2a0a571ca60df71ac14d8c61e9054e"',
  SPACE_ID: '"qzrr6u8rlzyb"',
  CONTENT_TYPE_USER: '"user"',
  CONTENT_TYPE_BLOG_PAGE: '"blogPage"',
  USER_ID: '"user-amm"'
})
