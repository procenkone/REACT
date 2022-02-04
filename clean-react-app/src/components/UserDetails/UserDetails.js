import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, Outlet} from "react-router-dom";

const UserDetails = () => {
    const [user, setUser] = useState({})
    const {state} = useLocation()


    // const {id, name, username, email, phone} = user

    useEffect(()=>{
        if (state) {
            setUser(state)
        }
    },[state])
    // console.log(user)

    return (
        <div className={'usersDetails'}>
            <div>
                <div>Id: {user.id}</div>
                <div>Name: {user.name} </div>
                <div>Username: {user.username} </div>
                <div>Email: {user.email} </div>
                <div>Phone: {user.phone} </div>
            </div>

            <NavLink to={`/users/${user.id}/posts`} ><button>Get posts</button></NavLink>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserDetails;