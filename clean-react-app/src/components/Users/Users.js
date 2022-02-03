import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => setUsers(user))
    }, [])
    return (
        <div className={'users'} style={{display:'flex'}} >
            <div>
            {users.map(user =>
                <div key={user.id}>
                    <NavLink to={`/users/${user.id}`} state={user}>
                        <div>Name: {user.name}</div>
                    </NavLink>
                </div>
            )}
            </div>
            <div className={'outletUserDetails'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Users;