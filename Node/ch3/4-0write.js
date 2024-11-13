// 동기로 파일 기록하기 - writeFileSync 함수
const fs = require("fs");
//별로 안좋은 방법
const data = fs.readFileSync("example.txt", "utf8")
fs.writeFileSync("text-1.txt", data);