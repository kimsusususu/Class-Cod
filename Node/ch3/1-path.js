//  *path:파일이나 디렉터리 경로를 다루는 함수를 포함한 모듈
const path = require("path")

const fullPath = path.join('some' , 'work' , 'ex' , 'txt')
console.log(fullPath);

//절대 경로
console.log(`파일 절대 경로 : ${__filename}`);

//경로 추출하기
const dir = path.dirname(__filename);
console.log(`경로만 : ${dir}`);

//파일 이름 추출하기
const fn = path.basename(__filename);
console.log(`파일 이름 : ${fn}`);

//파일이름만 보기
const fn2 = path.basename(__filename, '.js');
console.log(`파일 이름 : ${fn2}`);

//확장자 추출하기 -> extname함수
const ext = path.extname(__filename);
console.log(`파일확장자 : ${ext}`);
console.log(path.basename(__filename, ext));

//        *parse 함수
//=> 경로를 분해해서 정보를 각각 객체로 반환함

//경로 분해하기
const parsedPath = path.parse(__filename);
console.log(parsedPath);

//        *FS모듈 : 노드에도 파일을 관리할 수 있는것
//         동기식 비동기식