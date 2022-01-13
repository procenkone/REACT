import React, {useEffect, useState} from 'react';

import User from "./User";
import {userServices} from "../services/user.services";

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
            {user && <div>{user.id}--{user.name}--{user.email}</div>}
            <div>{users.map(item => <User key={item.id} user={item} getUserId={getUserId}/>)}</div>
        </div>
    );
};

export default Users;