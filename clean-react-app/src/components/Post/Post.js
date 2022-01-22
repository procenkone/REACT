import React from 'react';
import {NavLink} from "react-router-dom";

const Post = ({posts}) => {
    let {id, title} = posts
    return (
        <div>
            <NavLink to={id.toString()} state={posts}>{title}</NavLink>

        </div>
    );
};

export default Post;