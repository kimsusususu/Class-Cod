//flag 값

// "a" : 내용을 추가하기 위해 파일을 열며,
//       만약에 파일이 없으면 만듭니다

// "ax" : "a"와 같지만 파일이 이미있으면 실패

//"a+" : 파일을 읽고 추가하기 위해 파일을 염,
//       만약에 파일이 없으면 만듭니다

const fs = require("fs");

let content =`
새내추.
`;

fs.writeFileSync("text-1.txt", content, {flag:"a"});