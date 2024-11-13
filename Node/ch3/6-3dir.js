//내용 상관없이 디렉터리 삭제 - rm함수

const fs = require("fs");

fs.rm("./test2", { recursive: true }, (err) => {
    if(err) {
        console.error(err);
    }else {
        console.log("folder deleted");
    }
});

