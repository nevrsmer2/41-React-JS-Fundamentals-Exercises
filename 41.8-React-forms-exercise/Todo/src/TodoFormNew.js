import React, { useState } from 'react';


const TodoFormNew = ({ addTodo }) => {
    const INITIAL_STATE = {
        todo: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ ...formData })
        setFormData(INITIAL_STATE)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">New Task: </label>
            <input
                id="todo"
                type="text"
                placeholder="New Todo"
                name="todo"
                value={formData.todo}
                onChange={handleChange}
            >
            </input>
            <br></br>
            <button>Add Task</button>
        </form>
    );
};

export default TodoFormNew;

