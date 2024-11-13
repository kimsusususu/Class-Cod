//              ---02-75 ppt ---

// import { useEffect,useState } from 'react';
// import React from 'react';

// const Info = () => {
//     const [name,setName] = useState('');
//     const [nickname,setNickname] = useState('');

//     useEffect(() => {         //컴포넌트가 렌더링 될때마다 특정작업을수행하게해줌
//         console.log('effect');
//         console.log(name);
//         return () =>{
//             console.log('cleanup');
//             console.log(name);
//         }       // 02-80 ppt
//     },[name]);

//     const onChangeName = e => {
//         setName(e.target.value);
//     }

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     }
//     return(
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName}/>
//                 <input value={nickname} onChange={onChangeNickname}/>
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b> {name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b> {nickname}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Info;

//             ---useReducer을 사용해서 info컴포넌트의 인풋 상태 관리--- 02-89ppt

import { useReducer }from "react";

function reducer(state, action){
    return{
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    const [state, dispatch]= useReducer(reducer,{
        name:'',
        nickname:''
    });
    const {name,nickname} = state;

    const onChange = e => {
        dispatch(e.target);
    }

    return(
        <div>
        <div>
            <input name="name" value={name} onChange={onChange} />
            <input name="nickname" value={nickname} onChange={onChange}/>
        </div>
        <div>
            <div>
            <b>이름:</b>{name}
        </div>
        <div>
            <b>닉네임:</b> {nickname}
        </div>
        </div>
        </div>
        
        
    );
};

export default Info;

