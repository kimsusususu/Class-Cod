//          ---함수 컴포넌트에서 useState 사용하기---02-20ppt
import React, { useState } from 'react'

const Say = () => {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('black');
    const onClickEnter = () => setMessage('어서와');
    const onClickLeave = () => setMessage('잘가라');

    return(
        <div>
            <button onClick = {onClickEnter}>입장</button>
            <button onClick = {onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}} onClick={()=>setColor('red')}>
                뻘건색
            </button>
            <button style={{color:'green'}} onClick={()=>setColor('green')}>
                초록색
            </button>
            <button style={{color:'blue'}} onClick={()=>setColor('blue')}>
                퍼런색
            </button>
        </div>
    );
};

export default Say;