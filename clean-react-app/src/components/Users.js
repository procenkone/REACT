import React, {useEffect, useState} from 'react';
import '../App.css'

import User from "./User";
import {userServices} from "../services/user.services";
import UserDetails from "./UserDetails";

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        userServices.getAll()
            .then(users => setUsers(users))
    }, [])

    const getUserId = (id) => {//принимает id и выводит его
        userServices.getId(id)
            .then(user => setUser(user))
    }
    return (
        <div>
            <div className='userWrap'>
            <div>{users.map(item => <User key={item.id} user={item} getUserId={getUserId}/>)}</div>
            <div><UserDetails user={user}/></div>
            </div>
        </div>
    );
};

export default Users;