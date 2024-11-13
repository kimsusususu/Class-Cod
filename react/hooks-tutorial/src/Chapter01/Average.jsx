//--------------------------useMemo(hooks)------------------------------


//                ---useMemo 사용해보기 (사용전)  02-91ppt---
// import React, { useState } from 'react';

// const getAverage = numbers => {
//     console.log('평균값 계산중..');
//     if (numbers.length === 0)return 0;
//     const sum = numbers.reduce((a,b) => a+b);
//     return sum / numbers.length;
// };

// const Average = () => {
//     const [list,setList] = useState([]);
//     const [number,setNumber] = useState('');

//     const onChange = e => {
//         setNumber(e.target.value);
//     };

//     const onInsert = e => {
//         const nextList = list.concat(parseInt(number));
//         setList(nextList);
//         setNumber('');
//     };

//     return(
//         <div>
//             <input value={number} onChange={onChange} />
//             <button onClick={onInsert}>등록</button>
//             <ul>
//                 {list.map((value,index) =>(
//                     <li key={index}>{value}</li>
//                 ))}
//             </ul>
//             <div>
//                 <b>평균값:</b>{getAverage(list)}
//             </div>
//         </div>
//     );
// };

// export default Average;


//                  ---useMemo 사용후--- 02-94ppt

// import React, { useMemo,useState } from 'react';   //변경된부분

// const getAverage = numbers => {
//     console.log('평균값 계산중..');
//     if (numbers.length === 0)return 0;
//     const sum = numbers.reduce((a,b) => a+b);
//     return sum / numbers.length;
// };

// const Average = () => {
//     const [list,setList] = useState([]);
//     const [number,setNumber] = useState('');

//     const onChange = e => {
//         setNumber(e.target.value);
//     };

//     const onInsert = e => {
//         const nextList = list.concat(parseInt(number));
//         setList(nextList);
//         setNumber('');
//     };

//     const avg = useMemo(()=> getAverage(list),[list]);  //변경된부분

//     return(
//         <div>
//             <input value={number} onChange={onChange} />
//             <button onClick={onInsert}>등록</button>
//             <ul>
//                 {list.map((value,index) =>(
//                     <li key={index}>{value}</li>
//                 ))}
//             </ul>
//             <div>
//                 <b>평균값:</b> {avg}  
//             </div>

//         </div>
//     );
// };

// export default Average;


//                   ---useCallback---  02-95ppt

// import React, { useCallback,useMemo,useState } from 'react';   

// const getAverage = numbers => {
//     console.log('평균값 계산중..');
//     if (numbers.length === 0)return 0;
//     const sum = numbers.reduce((a,b) => a+b);
//     return sum / numbers.length;
// };

// const Average = () => {
//     const [list,setList] = useState([]);
//     const [number,setNumber] = useState('');

//     const onChange = useCallback(e => {   //useCallback포함
//         setNumber(e.target.value);
//     },[]);

//     const onInsert = useCallback(() => {  //useCallback포함
//         const nextList = list.concat(parseInt(number));
//         setList(nextList);
//         setNumber('');
//     },[number,list]);   // number 혹은 list가 바뀌었을 때만 함수 생성

//     const avg = useMemo(()=> getAverage(list),[list]);  

//     return(
//         <div>
//             <input value={number} onChange={onChange} />
//             <button onClick={onInsert}>등록</button>
//             <ul>
//                 {list.map((value,index) =>(
//                     <li key={index}>{value}</li>
//                 ))}
//             </ul>
//             <div>
//                 <b>평균값:</b> {avg}  
//             </div>

//         </div>
//     );
// };

// export default Average;


//                       ---useRef--- 02-98ppt

import React, { useCallback,useMemo,useState,useRef } from 'react';   

const getAverage = numbers => {
    console.log('평균값 계산중..');
    if (numbers.length === 0)return 0;
    const sum = numbers.reduce((a,b) => a+b);
    return sum / numbers.length;
};

const Average = () => {
    const [list,setList] = useState([]);
    const [number,setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {   //useCallback포함
        setNumber(e.target.value);
    },[]);

    const onInsert = useCallback(() => {  //useCallback포함
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    },[number,list]);   // number 혹은 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(()=> getAverage(list),[list]);  

    return(
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index) =>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}  
            </div>

        </div>
    );
};

export default Average;


