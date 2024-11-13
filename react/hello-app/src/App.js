//------------------------------------리액트 1일차----------------------------------------------
// import {Fragment} from "react"; // Fragment 라는기능을 사용하면 div사용안해도됨 01-28ppt
// // import React from "react";   01-24ppt
// import "./App.css"
// //import ImportComponent from "./Chapter02/ImportComponent";  01-40ppt
// import S_Props from "./Chapter03/S_Props";

// function App() {    
//   return (
//     // Fragment 라는기능을 사용하면 div사용안해도됨 01-28ppt   
//     <>  
//       <h1>Start React !!</h1>
//       <p>HTML 적용하기</p>
//       <S_Props props_val="This is Props" />
//     </>
    
//     // 컴포넌트가 여러개일땐 부모폴더로 감싸야됨  01-24ppt
//     //  <div>   
//     //   <h1>Start React !!</h1>
//     //   <p>HTML 적용하기</p>
//     // </div>
//   );
// }

// export default App;

// //             컴포넌트 합성01-51 ppt
// function Welcome(props){    
//   return <h1>Hello, {props.name}</h1>
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Mike" />
//       <Welcome name="Steve" />
//       <Welcome name="Jane" />
//     </div>
//   );
// }

// export default App;

//  ppt2장 시작 02-01 ppt
// import './App.css';

// function App() {
//   const name = "리액트";
//   return (
//     <div className="react">{name}</div> //html의class는 JSX에서는classname로 사용
//   );
// }

// export default App;

//   클래스형 컴포넌트 02-03ppt
// import {Component}from"react";

// class App extends Component{
//   render(){
//     const name = 'react';
//     return<div className="react">{name}</div>
//   }
// }

// export default App;

//    함수형 컴포넌트   02-06ppt
// import MyComponent from "./Mycomponent";

// const App = () => {
//   return <MyComponent />;
// }
// export default App;

//App 컴포넌트에서 MyComponent의 props값을 지정하기 02-08ppt

// import MyComponent from "./Mycomponent";

// const App = () => {
//   return <MyComponent name="React"/>
// }
// export default App;

//App 컴포넌트 props기본값 설정 :defaultProps 02-09ppt
// import MyComponent from "./Mycomponent";

// const App = () => {
//   return <MyComponent/>;
// }

// export default App;

// 태그 사이에 내용을 보여주는 children 02-10 ppt
// import MyComponent from "./Mycomponent";

// const App = () => {
//   return <MyComponent>리액트</MyComponent>;
// }

// export default App;

//------------------------------------리액트 2일차----------------------------------------------

// import EventPractice from "./Chapter01-2/EventPractics";


// const App = () => {
//   return <EventPractice/>;
// }
// export default App;

//                     ---컴포넌트에 랜더링--- 02-41ppt
// import {Component}from "react";
// import ValidationSample from "./ValidationSample";

// class App extends Component{
//   render(){
//     return(
//       <ValidationSample/>
//     )
//   }
// }
// export default App;


// //                     ---스트롤 박스 컴포넌트 랜더링 02-48ppt---

// import {Component} from "react";
// import ScrollBox from "./ScrollBox";
// class App extends Component {
//   render(){
//     return(
//       <div>
//         <ScrollBox ref={(ref) => this.scrollBox=ref} />
//           <button onClick={() => this.scrollBox.scrollToBottom()}>
//             맨 밑으로
//           </button>
//       </div>
      
//     )
//   }
// }
// export default App;

import {Component} from "react";
import IterationSample from "./Chapter01-2/IterationSample";
class App extends Component {
  render(){
    return(
      <IterationSample/>
      
    )
  }
}
export default App;