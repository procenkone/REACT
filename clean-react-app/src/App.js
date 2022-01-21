import './App.css';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";
import {useState} from "react";

function App() {
    const [trigger,setTrigger] = useState({})
    const update = data =>{
        setTrigger(data)
    }

    return (
        <div className="App">
            <Form update={update}/>
            <Cars trigger={trigger} update={update} />
        </div>
    );
}

export default App;
