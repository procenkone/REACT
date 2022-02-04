import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [])
    return (
        <div style={{display: 'flex'}}>
            <div>
            {posts.map(post =>
                    <div key={post.id}>
                        <NavLink to={`/posts/${post.userId}`} state={post} >
                            <div>Name: {post.title}</div>
                        </NavLink>
                    </div>
                )}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )

};


export default Posts;