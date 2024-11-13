import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos,onRemove,onToggle}) => {  //onRemove삭제함수 호출하기
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id}onRemove={onRemove}onToggle={onToggle}/>
            ))}
        </div>
    );
};

export default TodoList;