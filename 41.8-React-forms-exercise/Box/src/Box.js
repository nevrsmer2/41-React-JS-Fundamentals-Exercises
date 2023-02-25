import React from 'react';

const Box = ({ id, backgroundColor, height, width, deleteBox }) => {

    return (
        <div style={
            {
                backgroundColor: `${backgroundColor}`,
                height: `${height}px`,
                width: `${width}px`
            }
        }
        >
            <button onClick={() => deleteBox(id)}>X</button>
        </div>
    );
};

export default Box;