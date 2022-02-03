import React from 'react';
import {NavLink, useLocation, Outlet} from "react-router-dom";

const UserDetails = () => {
    const {state:{id,name,email,phone,username}} = useLocation()

    return (
        <div className={'usersDetails'}>
            <div>
                <div>Id: {id}</div>
                <div>Name: {name} </div>
                <div>Username: {username} </div>
                <div>Email: {email} </div>
                <div>Phone: {phone} </div>
            </div>

            <NavLink to={`/users/${id}/posts`} ><button>Get posts</button></NavLink>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserDetails;