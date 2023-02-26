import { useState } from 'react';

const UseCardFacingState = (initialState = true) => {
    const [state, setState] = useState(initialState);

    const flipCard = () => {
        setState(state => !state)
    }
    return [state, flipCard]
}

export default UseCardFacingState;
