import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import css from './postsPages.module.css'
import {postsServices} from "../../services/posts.services";
import Post from "../../components/Post/Post";

const PostsPages = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postsServices.getAll().then(value => setPosts(value))
    }, [])

    return (
        <div className={css.postsWrap}>
            <div>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPages;