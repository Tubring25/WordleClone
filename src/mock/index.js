/*
 * @Description: mock service
 * @Date: 2021-08-25 22:51:17
 * @LastEditTime: 2021-08-25 23:03:53
 */

const Mock = require('mockjs')
const express = require('express')

const app = express()

const bodyParse = require('body-parser')

app.use(bodyParse.json())

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
  next()
})

app.listen('3000', () => {
  console.log('mock服务器已启动，port: 3000')
})
