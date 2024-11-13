//        ---클래스형 컴포넌트의 state   02-16ppt---
// import React, {Component} from 'react';
// import '../App.css';

// //          클래스형 컴포넌트의 state 02-16ppt
// class Counter extends Component {
//     constructor(props){   //02-17ppt
//         super(props);
//         //state의 초기값 설정하기
//         this.state = {
//             number:0
//         }
//     }
//     render() {
//         const {number} = this.state; //state를 조회 할 때에는 this.state로 조회함
//         return(
//             <div>
//                 <h1>{number}</h1>
//                 <button
//                 //onClick 을 통하여 버튼이 클릭됐을 때 호출 할 함수를 지정합니다.
//                 onClick={() =>{
//                     this.setState({ number:number +100}); //상태값을 바꾸는함수 setState
//                 }}
//                 >
//                     +100
//                 </button>

//                 <button
//                 //onClick 을 통하여 버튼이 클릭됐을 때 호출 할 함수를 지정합니다.
//                 onClick={() =>{
//                     this.setState({ number:number +10}); //상태값을 바꾸는함수 setState
//                 }}
//                 >
//                     +10
//                 </button>
//                 <button
//                 //onClick 을 통하여 버튼이 클릭됐을 때 호출 할 함수를 지정합니다.
//                 onClick={() =>{
//                     this.setState({ number:number +1}); //상태값을 바꾸는함수 setState
//                 }}
//                 >
//                     +1
//                 </button>
                
//                 <button style={{backgroundcolor:'red'}}
//                 //onClick 을 통하여 버튼이 클릭됐을 때 호출 할 함수를 지정합니다.
//                 onClick={() =>{
//                     this.setState({ number:number -1}); //상태값을 바꾸는함수 setState
//                 }}
//                 >
//                     -1
//                 </button>
//                 <button
//                 //onClick 을 통하여 버튼이 클릭됐을 때 호출 할 함수를 지정합니다.
//                 onClick={() =>{
//                     this.setState({ number:number -10}); //상태값을 바꾸는함수 setState
//                 }}
//                 >
//                     -10
//                 </button>
//                 <button
//                 //onClick 을 통하여 버튼이 클릭됐을 때 호출 할 함수를 지정합니다.
//                 onClick={() =>{
//                     this.setState({ number:number -100}); //상태값을 바꾸는함수 setState
//                 }}
//                 >
//                     -100
//                 </button>
                
//         </div>
            
//         );
//     }
// }
// export default Counter;

//         ---State 객체 안에 여러 값이 있을떄  02-18ppt---
// import React, {Component} from 'react';

// class Counter extends Component {
//     constructor(props){   //02-17ppt
//         super(props);
//         //state의 초기값 설정하기
//         this.state = {
//             number:0,
//             fixedNumber: 0
//         }
//     }
//     render() {
//         const {number,fixedNumber} = this.state; //state를 조회 할 때에는 this.state로 조회함
//         return(
//             <div>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값 : {fixedNumber}</h2>
//                 <button
//                 //onClick 을 통하여 버튼이 클릭됐을 때 호출 할 함수를 지정합니다.
//                 onClick={() =>{
//                     this.setState({ number:number +1});
//                 }}
//                 >
//                     +1
//                 </button>
//             </div>
//         );
//     }
// }
// export default Counter;

//          ---state를 constructor에서 꺼내기 02-19ppt---
// import React, {Component} from 'react';

// class Counter extends Component { //변경
//     state = {
//         number:0,
//         fixedNumber:0
//     }
//     render() {
//         const {number,fixedNumber} = this.state; //state를 조회 할 때에는 this.state로 조회함
//         return(
//             <div>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값 : {fixedNumber}</h2>
//                 <button
//                 //onClick 을 통하여 버튼이 클릭됐을 때 호출 할 함수를 지정합니다.
//                 onClick={() =>{
//                     this.setState({ number:number +1});
//                 }}
//                 >
//                     +1
//                 </button>
//             </div>
//         );
//     }
// }
// export default Counter;