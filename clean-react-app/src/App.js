import './App.css';
import Cars from "./components/Cars";
import Form from "./components/Form";
import {useState} from "react";

function App() {
    const [trigger, setTrigger] = useState(false)
    const [id, setId] = useState(null)
    const updateCar = (id) => {
        setId(id)
    }
    return (
        <div className="App">
            <Form setTrigger={setTrigger} id={id} trigger={trigger}/>
            <Cars setTrigger={setTrigger} updateCar={updateCar} trigger={trigger}/>
        </div>
    );
}

export default App;
