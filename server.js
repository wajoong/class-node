const express = require('express')
const app = express()
app.listen("8080", (req,res) => {
    console.log("포트 8080으로 서버 대기중...")
})
app.get("/book", (req,res) =>{
    console.log("책방입니다...");
})