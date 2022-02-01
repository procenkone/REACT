import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {getAllUsers} from "../../store/usersSlice";
import User from "../User/User";
import css from './users.module.css'

const Users = () => {
    const dispatch = useDispatch()
    const {users, status, error} = useSelector(state => state['usersReducer'])

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div className={css.users}>
            <div className={'users_block'}>
                <h2>Users: </h2>
                {status === 'pending' && <h1>Loading</h1>}
                {error && <h1>{error}</h1>}
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
            <div className={css.users_outlet}>
                <Outlet/>
            </div>

        </div>
    );
};

export default Users;