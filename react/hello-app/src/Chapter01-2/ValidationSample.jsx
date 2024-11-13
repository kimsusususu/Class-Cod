//                    ---버튼 누르면 색상변경02-40ppt---

import React, {Component} from 'react';
import './ValidationSample.css';
class ValidationSample extends Component {

    state = {
        password:'',
        clicked: false,   //초기값
        validated: false
    };
    // onKeyPress = e => {
    //     this.setState({
    //     if(e.key === 'Enter'){ //엔터눌렀을떄 이벤트발생시키기
    // });
        
    // }
    handleChange = e => {
        this.setState({
            password:e.target.value
        });
    };
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus();  //버튼onClick 이벤트코드 수정 02-46ppt
        //버튼에서 onClick 이벤트가 발생할 떄 input에 포커스를주도록 코드를수정함
    };
    render() {
        return (
            <div>
                <input
                ref={(ref) => this.input=ref}  //input에 ref달기
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked? (this.state.validated? 'success':'failure'):''}
                //트루면 success  false면 failure
 />   
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}
export default ValidationSample;