//자바 스크림트의 비동기처리

console.log("첫번쨰 작업");
setTimeout(() => {
    console.log("두번째 작업");
},0);
console.log(`세번째 작업`);