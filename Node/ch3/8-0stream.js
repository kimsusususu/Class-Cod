//스트림이란 물의 흐름처럼 한곳에서 다른곳으로
//데이터가 이동하는것

//스트림은 버퍼를 사용해서 데이터를 처리하거나 전달함

//스트림을 사용하면 파일 전체를 내려 받지 않고도 차례로
//처리할 수 있어서 시간 절약및 메모리도 최소화 할 수 있다


//   *리더블 스트림 연습하기 readStream

const fs = require("fs");

const readStream =fs.createReadStream("./readMe.txt");

readStream.on("data", (chunk) => {
    console.log("new chunk received:");
    console.log(chunk);
});
readStream.on("end", ()=> {
    console.log("finished reading data");
});
readStream.on("error", (err)=> {
    console.log(`Error reading the file: ${err}`);
});