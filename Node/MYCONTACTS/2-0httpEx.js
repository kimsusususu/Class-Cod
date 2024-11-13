const http = require ("http");

const server = http.createServer((req, res)=>{
    const{method, url} = req;
    res.setHeader("Content-type", "text/plain");


//URL에 따라 응답을 다르게 처리
if(method ==="GET" && url === "/home") {
    res.statusCode = 200;
    res.end("HOME");
}else if(method ==="GET" && url === "/about") {
    res.statusCode = 200;
    res.end("ABOUT");
}else{
    res.statusCode = 404;
    res.end("Not Fount");
}
})