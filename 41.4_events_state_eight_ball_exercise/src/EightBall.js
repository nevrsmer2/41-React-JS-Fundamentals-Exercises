import React, { useState } from "react";
import getAnswer from "./answers";
import "./EightBall.css";

const EightBall = () => {
    const [color, setColor] = useState("black");
    const [message, setMessage] = useState("Think of a Question");

    function updateStates() {
        const { message, color } = getAnswer();
        setMessage(message);
        setColor(color);
    };

    return (
        <>
            <h1 >Wellcome to Eightball!!</h1>
            <div className={`Eightball ${color}`} onClick={() => updateStates()}>
                <h2> {message}</h2>
            </div>
        </>
    );
};

export default EightBall;











