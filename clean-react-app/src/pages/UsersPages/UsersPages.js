import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import css from './userPages.module.css'
import {userServices} from "../../services/user.services";
import {User} from "../../components";


const UsersPages = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userServices.getAll().then(value => setUsers(value))
    }, [])

    return (
        <div className={css.userPageWrap}>
            <div>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPages};