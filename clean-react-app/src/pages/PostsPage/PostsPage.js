import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import css from './PostPage.module.css'
import {postsService} from "../../services/posts.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postsService.getAll().then(value => setPosts([...value]))
    }, [])
    return (
        <div className={css.wrap}>
            <div>
                <h1>PostsPage</h1>

                {posts.map(item => <Post key={item.id} posts={item}/>)}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default PostsPage;