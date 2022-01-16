import React, {useEffect, useState} from 'react';

import Users from "./Users";
import {getUser} from "../services/user.services";

const Form = () => {
    //state
    const [form, setForm] = useState({name: '', username: '', email: ''})
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState(null)

    useEffect(() => {
        getUser.all()
            .then(users => setUsers(users))
    }, [])

    const formHandler = (event) => {
        event.preventDefault()
        setForm({...form, [event.target.name]: event.target.value})
    }

    const find = (event) => {
        event.preventDefault()
        setFilter(users.filter(item => item.name.toLowerCase().includes(form.name)
            && item.username.toLowerCase().includes(form.username)
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
            <Users users={users} filter={filter}/>

        </div>
    );
};

export default Form;