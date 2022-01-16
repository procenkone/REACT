import React, {useEffect, useState} from 'react';
import Users from "./Users";

const Form = () => {
    const [form, setForm] = useState({name: '', username: '', email: ''})
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }, [])

    const formHandler = (event) => {
        event.preventDefault()
        let eventData = {...form, [event.target.name]: event.target.value}
        setForm({...eventData})
    }
    const find = (event) => {
        event.preventDefault()

        setUsers(users.filter(item => item.name.toLowerCase().includes(form.name)
            && item.email.toLowerCase().includes(form.email)
            && item.email.toLowerCase().includes(form.email)))
    }
    return (
        <div>
            <form onSubmit={find}>
                <div>
                    <label>Name: <input type={'text'} defaultValue={''} name={'name'} onChange={formHandler}/></label>
                </div>
                <div>
                    <label>Username: <input type={'text'} defaultValue={''} name={'username'}
                                            onChange={formHandler}/></label>
                </div>
                <div>
                    <label>Email: <input type={'text'} defaultValue={''} name={'email'} onChange={formHandler}/></label>
                </div>
                <button>find</button>
            </form>
            <Users users={users}/>

        </div>
    );
};

export default Form;