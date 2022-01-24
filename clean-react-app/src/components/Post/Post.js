import React from 'react';
import {NavLink} from "react-router-dom";

import css from './post.module.css'

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div className={css.titlePost}>
            <NavLink to={id.toString()}>{title}</NavLink>

        </div>
    );
};

export {Post};