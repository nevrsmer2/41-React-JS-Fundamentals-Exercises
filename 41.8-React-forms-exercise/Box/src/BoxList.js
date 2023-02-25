import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import BoxFormNew from './BoxFormNew';


const INITIAL_STATE = [
    { id: uuid(), backgroundColor: "blue", height: "200", width: "400" }
];

const BoxList = () => {
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    // useEffect(() => {
    //     console.log("BOXES:", boxes);
    // }, [boxes])

    function addBox(newBox) {
        setBoxes(boxes => [...boxes, { id: uuid(), ...newBox }]);
    };

    function deleteBox(id) {
        const updated = boxes.filter(box => box.id !== id);
        setBoxes(updated)
    };

    return (
        <>
            <div>
                {boxes.map(({ id, backgroundColor, height, width }) => <Box key={id} id={id} backgroundColor={backgroundColor} height={height} width={width} deleteBox={deleteBox} />)}
            </div>
            <BoxFormNew addBox={addBox} />
        </>
    );
};


export default BoxList;