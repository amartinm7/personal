'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CMA_ACCESS_TOKEN: '"CFPAT-2e21a762ce0a4d8ef9a44085e2cc6cea5e5b1816f4271b643ed934bf6e13f7c5"',
  SPACE_ID: '"qzrr6u8rlzyb"'
})
