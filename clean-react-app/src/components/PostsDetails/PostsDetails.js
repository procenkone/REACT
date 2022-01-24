import React, {useEffect, useState} from 'react';
import {NavLink, useParams, Outlet} from "react-router-dom";

import {postsServices} from "../../services/posts.services";

const PostsDetails = () => {
    const [post, setPost] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        postsServices.getPostById(id).then(value => setPost({...value}))
    }, [id])
    return (
        <div>
            {post && (
                <div>
                    <div>Id: {post.id}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                    <NavLink to={'comments'} state={id}>
                        <button>Get comments</button>
                    </NavLink>
                </div>
            )}
            <div><Outlet/></div>
        </div>
    );
};

export {PostsDetails};