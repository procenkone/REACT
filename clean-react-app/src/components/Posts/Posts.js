import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsServices} from "../../services/posts.services";


const Posts = () => {
    const [posts, setPosts] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        postsServices.getById(id).then(value => setPosts([...value]))
    }, [])
    return (
        <div>
            {
                posts && posts.map(post =>
                    <div key={post.id}>
                        <div>Id: {post.id}</div>
                        <div>Title: {post.title}</div>
                        <div>Body: {post.body}</div>
                        <hr/>
                        <br/>
                    </div>
                )

            }
        </div>
    );
};

export default Posts;