import { useState,useCallback } from'react';
import { MdAdd } from "react-icons/md";
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {  
    const [value,setValue]=useState('');  //초기값 주기
    const onChange = useCallback(e=>{  //onChange 이벤트가발생한다면
        setValue(e.target.value);
    },[]); //[]한번만

    const onSubmit = useCallback(
        e=> {
            onInsert(value);
            setValue(''); //value 값 초기화
            //submit 이벤트는 브라우저에서 새로고침을 발생시킴
            //이를 방지하기 위해 이 함수를 호출함
            e.preventDefault(); //값을 입력할때마다 페이지새로고침 방지 값만 입력되게해줌
        },[onInsert,value]
    );
    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
            placeholder="할 일을 입력하세요"
            value={value}
            onChange={onChange}
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;