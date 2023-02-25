import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import TodoFormNew from './TodoFormNew';


const INITIAL_STATE = [
    { id: uuid(), todo: "Wash car" },
    { id: uuid(), todo: "Feed cats" },
    { id: uuid(), todo: "Check mail" }
];

const TodoList = () => {

    const [todo, setTodo] = useState(INITIAL_STATE);

    // useEffect(() => {
    //     console.log("TODO []:", todo);
    // }, [todo])

    const addTodo = (newTodo) => {
        setTodo(todo => [...todo, { id: uuid(), ...newTodo }]);
    };

    const deleteTodo = (id) => {
        const removed = todo.filter(todo => todo.id !== id)
        setTodo(removed);
    };

    return (
        <>
            <h1>To-do List</h1>
            <ul>
                < TodoFormNew addTodo={addTodo} />
                {todo.map(({ id, todo }) => <Todo key={id} id={id} todo={todo} deleteTodo={deleteTodo} />)}
            </ul>
        </>
    );

};


export default TodoList;