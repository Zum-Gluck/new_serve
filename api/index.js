const express = require("express");
const path = require("path")
const fs = require("fs")
// 文件路径
const CATE_PATH = path.join(__dirname, 'json', 'categroy.json')
const LIST_PATH = path.join(__dirname, 'json', 'newslist.json')
const INFO_PATH = path.join(__dirname, 'json', 'newsinfo.json')

const api = express.Router()
 
//  categroy 接口
api.get("/cate", (req, res) => {
  fs.readFile(CATE_PATH, function (err, data) {
    result = JSON.parse(data.toString());
    // 读取的数据响应到页面中
    res.send(result)
  })
})

//  list 接口
api.get("/list", (req, res) => {
  fs.readFile(LIST_PATH, function (err, data) {
    result = JSON.parse(data.toString());
    // 读取的数据响应到页面中
    let cid = req.query.cid
    let resultArr = result.result
    let response = resultArr.find(item => item.cid == cid)
    res.send(response)
  })
})

//  info 接口
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