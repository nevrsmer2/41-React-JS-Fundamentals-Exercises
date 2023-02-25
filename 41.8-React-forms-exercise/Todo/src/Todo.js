import React from 'react';

const Todo = ({ id, todo, deleteTodo }) => {
    return (
        <li>Task: {todo}
            <button onClick={() => deleteTodo(id)}>X</button>
        </li>
    );
};

export default Todo;
