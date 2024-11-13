//      ---클래스 컴포먼트 함수컴포먼트 02-3~6ppt---

// const MyComponent = () => { //02-05 ppt  화살표함수
//     return <div>나의 새롭고 멋진 컴포넌트</div>
// }

// export default MyComponent;

//      ---props   02-07ppt---
// const MyComponent = props => {
//     return <div> 안뇽 내이름 {props.name}입니다</div>
// }

// export default MyComponent;

//    --- props 기본값 설정 02-09ppt---
// const MyComponent = props => {
//     return <div> 안뇽 내이름 {props.name}입니다</div>
// }

// MyComponent.defaultProps = {
//     name:'기본이름'
// }

// export default MyComponent;

//           ---태그 사이에 내용을 보여주는 children 02-10 ppt---
// const MyComponent = props => {
//     return( <div> 안뇽 내이름 {props.name}입니다.<br/>
//     children 값은 {props.children}입니다.
//     </div>
//     )
// }

// MyComponent.defaultProps = {
//     name:'기본이름'
// }

// export default MyComponent;

//        ---비구조화 할당 문법을 통해props내부 값 추출하기 02-12ppt---
// const MyComponent = ({name,children}) => {
//     return( 
//     <div> 안뇽 내이름 {name}입니다.<br/>
//     children 값은 {children}입니다.
//     </div>
//     )
// }

// MyComponent.defaultProps = {
//     name:'기본이름'
// };

// export default MyComponent;

//      --- 클래스형 컴포넌트에서 props사용하기 02-14ppt---
// import {Component} from "react";

// class MyComponent extends Component{
//     render(){
//         const {name,children} = this.props;
//         return(
//             <div>
//                 안녕 날소개하지 내이름은{name}.<br/>
//                 children 값은 {children} 입니다 <br/>
//             </div>
//         )
//     }
// }
// export default MyComponent;

