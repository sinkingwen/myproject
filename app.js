const express = require('express')
const app=express()
const port = 3000

//  主页输出 "Hello World"
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
 }) 
 //  POST 请求
 app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
 })
 //  /del_user 页面响应
 app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
 })
 //  /list_user 页面 GET 请求
 app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
 })
 // 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
 app.get('/ab*cd', function(req, res) {   
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
 })
app.listen(port,()=>{
    console.log(`Server is listening on http://127.0.0.1:${port}`)
})