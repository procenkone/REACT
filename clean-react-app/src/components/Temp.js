import React, {useReducer} from 'react';

const reduser = (state, action) => {
    switch (action.type) {
        case "inc": {
            return {...state, count: state.count + 1}
        }
        case "dec": {
            return {...state, count: state.count - 1}
        }
        case "res":
            return {...state, count:action.payload}
    }
}

const Temp = () => {
    const [state, dispatch] = useReducer(reduser, {count: 0})
    return (
        <div>
            {state.count}

            <button onClick={() => dispatch({type: 'inc'})}>inc</button>
            <button onClick={() => dispatch({type: 'dec'})}>dec</button>
            <button onClick={() => dispatch({type: 'res', payload: 0})}>res</button>

        </div>
    );
};

export default Temp;