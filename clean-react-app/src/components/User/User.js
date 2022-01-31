import React from 'react';
import {NavLink} from "react-router-dom";

const User = ({user}) => {
    return (
        <div>
            <hr/>
            <br/>
            <div><b>User № {user.id}</b></div>
            <div><b>Name:</b> {user.name}</div>
            <NavLink to={user.id.toString()} state={user}><button>get details user</button></NavLink>
            <br/>
        </div>
    );
};

export default User;