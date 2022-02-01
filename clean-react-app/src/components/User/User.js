import React from 'react';
import {NavLink} from "react-router-dom";

import css from './user.module.css'

const User = ({user}) => {
    return (
        <div className={css.user}>
            <div><b>User № {user.id}</b></div>
            <div><b>Name:</b> {user.name}</div>
            <NavLink to={user.id.toString()}>
                <button>get details user</button>
            </NavLink>
            <br/>
        </div>
    );
};
export default User;