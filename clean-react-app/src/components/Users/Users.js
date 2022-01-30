import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {getAllUsers} from "../../store/usersSlice";
import User from "../User/User";


const Users = () => {
    const dispatch = useDispatch()
    const {users, status, error} = useSelector(state => state['usersReducer'])

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    console.log(users)

    return (
        <div style={{display: 'flex'}}>
            <div className={'users_block'}>
                {status === 'pending' && <h1>Loading</h1>}
                {error && <h1>{error}</h1>}
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
            <div className={'users_outlet'}>
                <Outlet/>
            </div>

        </div>
    );
};

export default Users;