const express = require("express");
const path = require("path")
const fs = require("fs")
// 文件路径
const DATA_PATH = path.join(__dirname, 'json', 'data.json')
const CATE_PATH = path.join(__dirname, 'json', 'categroy.json')
const LIST_PATH = path.join(__dirname, 'json', 'newslist.json')
const INFO_PATH = path.join(__dirname, 'json', 'newsinfo.json')

const api = express.Router()

//  data 接口
api.get("/data", (req, res) => {
  fs.readFile(DATA_PATH, function (err, data) {
    result = JSON.parse(data.toString());
    // 读取的数据响应到页面中
    res.send(result)
  })
})

//  categroy 接口
api.get("/cate", (req, res) => {
  fs.readFile(CATE_PATH, function (err, data) {
    result = JSON.parse(data.toString());
    // 读取的数据响应到页面中
    res.send(result)
  })
})

//  info 接口
api.get("/list", (req, res) => {
  fs.readFile(LIST_PATH, function (err, data) {
    result = JSON.parse(data.toString());
    // 读取的数据响应到页面中
    res.send(result)
  })
})

//  list 接口
api.get("/info", (req, res) => {
  fs.readFile(INFO_PATH, function (err, data) {
    result = JSON.parse(data.toString());
    // 读取的数据响应到页面中
    let id = req.query.id;
    let list = result.list;
    let resItem = list[id]
    res.send(resItem)
  })
})

module.exports = api;