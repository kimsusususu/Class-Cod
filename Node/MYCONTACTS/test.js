const http = require("http");

const server = http.createServer((req,res) => {
    console.log("익에 되네");
});

server.listen(3000, () => {
    console.log("서버 실행 중");
});