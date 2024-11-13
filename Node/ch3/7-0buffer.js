//버퍼 : 임시 데이터를 저장하는 물리적인
//       메모리 공간

//노드의 버퍼는 처음부터 크기가 고정되어 있고 내용이 
//이진값으로 저장됨

//readFile 함수에 utf-8 옵션을 사용하거나 data에 toString
//함수를 적용하면 버퍼 내용을 읽을수 있는 문자열 형태로 
//바꿀수가 있습니다

//   *버퍼 살펴보기 - 이진 데이터와 문자열

const fs = require("fs");

fs.readFile("example.txt", (err, data)=> {
    if (err) {
        console.log(err);
    }else {
        console.log(data);  // 이진 데이터 표시
        console.log("\n");
        console.log(data.toString()); // 문자열로 변환해서 표시
    }
});

//스트림이란 물의 흐름처럼 한곳에서 다른곳으로
//데이터가 이동하는것

//스트림은 버퍼를 사용해서 데이터를 처리하거나 전달함

//스트림을 사용하면 파일 전체를 내려 받지 않고도 차례로
//처리할 수 있어서 시간 절약및 메모리도 최소화 할 수 있다

//리더블 스트림 : 직접