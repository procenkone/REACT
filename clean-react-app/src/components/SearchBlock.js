import React, {createRef, useEffect, useState} from 'react';

import '../App.css'
import {getUsers} from "../services/users.service";

const SearchBlock = () => {
    //state
    const [users, setUsers] = useState([])
    //ref
    let name = createRef()
    let username = createRef()
    let email = createRef()

    useEffect(() => {
        getUsers.getAll()
            .then(users => setUsers(users))
    }, [])

    const search = (event) => {
        event.preventDefault()
        let inpName = name.current.value
        let inpUsername = username.current.value
        let inpEmail = email.current.value
        setUsers(users.filter(item =>
            item.name.includes(inpName.toLowerCase())
            && item.username.includes(inpUsername.toLowerCase())
            && item.email.includes(inpEmail.toLowerCase())))
    }
    return (
        <div>
            <form onSubmit={search}>
                <div><label>Name: <input ref={name} defaultValue={''}/></label></div>
                <div><label>Username: <input ref={username} defaultValue={''}/></label></div>
                <div><label>Email: <input ref={email} defaultValue={''}/></label></div>
                <button>find</button>
            </form>
            {users.map(item => <div className={'itemUser'} key={item.id}>{item.id}--{item.name}--{item.username}--{item.email}</div>)}
        </div>);
};

export default SearchBlock;