//------------------------------------리액트 2일차----------------------------------------------
//                 이벤트 핸들러 사용 23-02 ppt
// import {Component} from "react";

// class EventPractice extends Component {

//     state ={        //state를 input에 값 담기
//         message:''
//     }
//     render(){
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요"
//                 value={this.state.message}
//                 onChange={
//                     (e)=>{                            //변화가 일어나면 이벤트발생
//                     this.setState({
//                         message: e.target.value //벨류값을 메세지에 담음
//                     })
//                 }
//             }
//             />
//             <button onClick={  ()=>{
//               alert(this.state.message);
//               this.setState({                 //State값을바꾸는setState
//                 message:''                 //버튼을누르면 메세지값을 바꾸는이벤트발생
//               })
//             }
//         } >확인</button>
//             </div>
//         )
//     }
// }
// export default EventPractice;


//                     ---input값을 여러개 사용해서 이벤트핸들러하기30-02ppt---

// import {Component} from "react";

// class EventPractice extends Component {

//     state ={        //state를 input에 값 담기
//         username:'',
//         message:''
//     }
//     hedleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username + ':' + this.state.message);
//         this.setState({
//             username:'',
//             message:''
//         })
//     }

//     render(){
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                 type="text"
//                 name="username"
//                 placeholder="유저명"
//                 value={this.state.username}
//                 onChange={this.hedleChange}
//                 />
//                 <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해보세요"
//                 value={this.state.message}
//                 onChange={this.hedleChange}
//                 />
//             <button onClick={this.handleClick}  
//          >확인</button>
//             </div>
//         );
//     };
// }
// export default EventPractice;


//                 ---onKeyPress 이벤트핸들링 33-02 ppt---

// import {Component} from "react";

// class EventPractice extends Component {

//     state ={        //state를 input에 값 담기
//         username:'',
//         message:''
//     }
//     hedleChange = (e) => {  //이벤트를핸들링할땐 e넣어주고 안할땐 함수로만 호출해도됨
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username + ':' + this.state.message);
//         this.setState({
//             username:'',
//             message:''
//         })
//     }
//     handleKeyPress = (e) => {
//         if(e.key === 'Enter'){
//             this.handleClick();
//         }
//     }

//     render(){
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                 type="text"
//                 name="username"
//                 placeholder="유저명"
//                 value={this.state.username}
//                 onChange={this.hedleChange}
//                 />
//                 <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해보세요"
//                 value={this.state.message}
//                 onChange={this.hedleChange}
//                 onKeyPress={this.handleClick}
//                 />
//             <button onClick={this.handleClick}  
//          >확인</button>
//             </div>
//         );
//     };
// }
// export default EventPractice;


//                   ---함수 컴포넌트로 구현---
import React, {useState} from 'react';

const EventPractice = () => {
    const [ username, setUsername ] = useState('');
    const [message, setMessage ] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ":" + message);
        setUsername('');
        setMessage('');
    }
    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick();
        }
    }
    return(
        <div>
            <h1>이벤트 연습</h1>
            <input
            type="text"
            name="username"
            placeholder="유저명"
            value={username}
            onChange={onChangeUsername}
            />
            <input
            type="text"
            name="message"
            placeholder="아무거나 입력해봐"
            value={message}
            onChange={onChangeMessage}
            onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;
