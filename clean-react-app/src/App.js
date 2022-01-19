import './App.css';
import Form from "./component/form/Form";
import Cars from "./component/cars/Cars";
import {useState} from "react";

function App() {
    const [trigger,setTrigger] = useState(null)

    const update = data =>{
        setTrigger(data)
    }

    return (
        <div className="App">
            <Form update={update}/>
            <Cars trigger={trigger} update={update}/>
        </div>
    );
}

export default App;
