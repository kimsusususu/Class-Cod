
//                  ---map 함수를 사용해서반복되는 컴포넌트--- 02-52ppt

// import React from 'react';

// const IterationSample = () => {
//     const names = ['눈사람','얼음','눈','바람'];
//     const nameList = names.map(name => <li>{name}</li>)
//     return <ul>{nameList}</ul>;
// };

// export default IterationSample;

//                   ---key없음--- 02-53ppt

// import React from 'react';

// const IterationSample = () => {
//     const names = ['눈사람','얼음','눈','바람'];
//     const nameList = names.map(name => <li>{name}</li>);
//     return <ul>{nameList}</ul>;
// };

// export default IterationSample;

//                   ---데이터 제거 기능구현 ---02-59ppt
import {useState} from "react";

const IterationSample = () => {
    const [names, setName] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'},
    ])

    const[inputText,setInputText] = useState('');
    const[nextId,setNextId] = useState(5);

    const onChange = e =>setInputText(e.target.value)
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setName(nextNames);
        setInputText('');
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setName(nextNames);
    }

    const nameList = names.map(name => (
    <li key={name.id} onDoubleClick={()=>onRemove(name.id)}> 
        {name.text}
    </li>
    ));
    return (
    <>
    <input value = {inputText} onChange={onChange} />
    <button onClick={onClick}>추가</button>
    <ul>{nameList}</ul>
    </>
    )
};
 export default IterationSample;