const fs = require("fs");

//   *동기식 처리 readdirSync
/*let files = fs.readdirSync("./");
console.log(files);*/

//---------------------------------------------------------------------//


//   *비동기식 readdir에서Sync빠진것
//비동기식 처리를 할떄 콜백과 프라미스 방식
fs.readdir("./", (err,files) => {
    if(err){
        console.error(err);
        return; //오류 발생시 즉시 반환
    }
    console.log(files);
});

