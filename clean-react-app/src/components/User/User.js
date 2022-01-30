import React from 'react';
import {NavLink} from "react-router-dom";

const User = ({user}) => {
    return (
        <div>
            <hr/>
            <div><b>Name:</b> {user.name}</div>
            {/*<div><b>username:</b> {user.username}</div>*/}
            {/*<div><b>email:</b> {user.email}</div>*/}
            {/*<div><b>phone:</b> {user.phone}</div>website*/}
            {/*<div><b>website:</b> {user.website}</div>*/}
            <NavLink to={`${user.id.toString()}`} state={user}><button>get details user</button></NavLink>
            <br/>
        </div>
    );
};

export default User;