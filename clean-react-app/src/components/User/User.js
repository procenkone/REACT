import React from 'react';
import {NavLink} from "react-router-dom";

import css from './user.module.css'

const User = ({user}) => {
    let {id, name} = user
    return (
        <div className={css.userWrap}>
            <NavLink to={id.toString()} state={user}><h3>{id}) name: {name}</h3></NavLink>
        </div>
    );
};

export default User;