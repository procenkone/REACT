import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const UserPosts = () => {
    const [posts, setPosts] = useState([])
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [id])

    return (
        <div className={'posts'}>
            {posts.map(post=><div key={post.id}><b>{post.id}{post.title}</b></div>)}
        </div>
    );
};

export default UserPosts;