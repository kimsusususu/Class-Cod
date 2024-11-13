// fs 모듈의 readdFileSync 함수

const fs = require("fs");

const data = fs.readFileSync("example.txt","utf-8");
console.log(data);