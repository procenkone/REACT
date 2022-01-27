import './App.css';
import {useReducer} from "react";


const reducer = (state, action) => {
    switch (action.type) {
        case "incrementBlockOne":
            return {...state, countBlockOne: state.countBlockOne + 1}
        case "decrementBlockOne":
            return {...state, countBlockOne: state.countBlockOne - 1}
        case "resetBlockOne":
            return {...state, countBlockOne: action.payloadBlockOne}
        case "incrementBlockTwo":
            return {...state, countBlockTwo: state.countBlockTwo + 1}
        case "decrementBlockTwo":
            return {...state, countBlockTwo: state.countBlockTwo - 1}
        case "resetBlockTwo":
            return {...state, countBlockTwo: action.payloadBlockTwo}
        case "incrementBlockTree":
            return {...state, countBlockTree: state.countBlockTree + 1}
        case "decrementBlockTree":
            return {...state, countBlockTree: state.countBlockTree - 1}
        case "resetBlockTree":
            return {...state, countBlockTree: action.payloadBlockTree}


    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {countBlockOne: 0, countBlockTwo:0, countBlockTree:0})

    return (
        <div className="App">
            <div className={"blockOne"}>
                <h2>{state.countBlockOne}</h2>
                <button onClick={() => dispatch({type: "incrementBlockOne"})}>increment</button>
                <button onClick={() => dispatch({type: "decrementBlockOne"})}>decrement</button>
                <button onClick={() => dispatch({type: "resetBlockOne", payloadBlockOne: 5})}>reset</button>
            </div>
            <div className={"blockTwo"}>
                <h2>{state.countBlockTwo}</h2>
                <button onClick={() => dispatch({type: "incrementBlockTwo"})}>increment</button>
                <button onClick={() => dispatch({type: "decrementBlockTwo"})}>decrement</button>
                <button onClick={() => dispatch({type: "resetBlockTwo", payloadBlockTwo: 0})}>reset</button>
            </div>
            <div className={"blockTree"}>
                <h2>{state.countBlockTree}</h2>
                <button onClick={() => dispatch({type: "incrementBlockTree"})}>increment</button>
                <button onClick={() => dispatch({type: "decrementBlockTree"})}>decrement</button>
                <button onClick={() => dispatch({type: "resetBlockTree", payloadBlockTree: 10})}>reset</button>
            </div>
        </div>
    );
}

export default App;
