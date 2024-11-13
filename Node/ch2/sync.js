/*function displayA() {
    console.log("A");
}
function displayB(callback) {
    setTimeout(()=>{
    console.log("B");
    callback();
    
    }, 3000);
}
function displayC() {
    console.log("C");
}

displayA();
displayB(displayC);

비동기 처리
1. 콜백 함수
2.프라미스(Promise)
요청이 성공했을 때와 실패했을떄의*/

/*
let likePizza = true;

const pizza = new Promise((resolve, reject)=> {
    if(likePizza)
        resolve('피자를주문합니다');
    else
    reject('피자를 주문하지 않습니다');
})


pizza.then(result=>console.log(result)).catch(err=>console.log(err));
/*
.then (result => console.log(result))
.catch (err => console.log(err))
*/

//모듈 : 어떤 기능별로 모아서 만들어 놓은 함수를 모듈

//   *코어모듈 
/*파일시스템 : fs
HTTP : http
경로 : path
스트림: streams
암호와 : crypto
운영체제 : os
유틸리티 : util
이벤트 : events

*글로벌 모듈
require 모듈을 가져오는데
글로벌 모듈은 require 가 필요 없음
global.console.log(name)*/

/* global.console.log(name)
CommonJS 모듈 vs ES모듈 시스템

ES모듈 시스템 (.msi)*/