import {useState,useRef,useCallback} from"react";
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from "./components/TodoList";

const App = () => {
  const [todos,setTodos] = useState([
  {
    id:1,
    text:'리액트 기초 알아보기',
    checked:true,
  },
  {
    id:2,
    text:'컴포넌트 스타일링 해보기',
    checked:true,
  },
  {
    id:3,
    text:'일정 관리 앱 만들어 보기',
    checked: false,
  }
  ])

  //고윳값으로 사용될 id
  //ref를 사용하여 변수담기

  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
      const todo = {
        id:nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current +=1;
    },
    [todos],
  )
  const onRemove = useCallback(  //지우기 기능 구현하기 03-26ppt
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },[todos],
  )
  const onToggle = useCallback( //수정기능구현
    id=>{
      setTodos(
        todos.map(todo => todo.id === id? {...todo,checked:!todo.checked}:todo,),
      );
    },[todos],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove = {onRemove} onToggle={onToggle}/> 
    </TodoTemplate>//onRemove삭제함수를 불러와
  )
};


export default App;
