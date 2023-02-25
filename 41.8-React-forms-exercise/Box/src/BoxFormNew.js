import React, { useState } from 'react';

const BoxFormNew = ({ addBox }) => {
    const INITIAL_STATE = {
        backgroundColor: "",
        width: "",
        height: ""
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
        addBox({ ...formData })
        setFormData(INITIAL_STATE)
    };

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="backgroundColor">Background Color: </label>
            <input
                id="backgroundColor"
                type="text"
                placeholder="Background Color"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />

            <label htmlFor="width">Width: </label>
            <input
                id="width"
                type="text"
                placeholder="Width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Height: </label>
            <input
                id="height"
                type="height"
                placeholder="Height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <button>Create Box</button>

        </form>
    );
};


export default BoxFormNew;