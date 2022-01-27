import {createRef, useReducer} from "react";

import './App.css';


const reducer = (state, action) => {
    switch (action.type) {
        case "addCat":
            return [...state, {cat: action.cat, id: action.id}];

        case "addDog":
            return [...state, {dog: action.dog, id: action.id}]

        case "delete":
            return state.filter(item => item.id !== action.payload)

        default:
            return state
    }
}


function App() {
    const catRef = createRef()
    const dogRef = createRef()
    const [state, dispatch] = useReducer(reducer, [])


    const addAnimal = (animal, id) => {
        dispatch({
            type: animal === 'cat' ? "addCat" : "addDog",
            id: id,
            [animal]: animal === 'cat' ? catRef.current.value : dogRef.current.value
        })
        animal === 'cat' ? catRef.current.value = '' : dogRef.current.value = ''
    }
    // const addCat = () => {
    //     dispatch({
    //         type: "addCat",
    //         cat: catRef.current.value
    //     })
    //     catRef.current.value = ''
    // }
    //
    // const addDog = () => {
    //     dispatch({
    //         type: "addDog",
    //         dog: dogRef.current.value
    //     })
    //     dogRef.current.value = ''
    // }


    return (
        <div className='App'>
            <div className={'inputWrap'}>
                <div>
                    <label>add cat:<input type={'text'} ref={catRef}/></label>
                    <button onClick={() => addAnimal('cat', Date.now())}>addCat</button>
                </div>
                <div>
                    <label>add dog:<input type={'text'} ref={dogRef}/></label>
                    <button onClick={() => addAnimal('dog', Date.now())}>addDog</button>
                </div>
            </div>
            <hr/>

            <div className={'animalWrap'}>
                <div>
                    {state.map((cat) =>
                        cat.hasOwnProperty('cat') && <div key={cat.id}>
                            <h3>{cat.cat}</h3>
                            <button onClick={() => dispatch({type: 'delete', payload: cat.id})}>delete</button>
                        </div>)}
                </div>

                <div>
                    {state.map((dog) =>
                        dog.hasOwnProperty('dog') && <div key={dog.id}>
                            <h3>{dog.dog}</h3>
                            <button onClick={() => dispatch({type: 'delete', payload: dog.id})}>delete</button>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default App;
