import React, {useEffect, useState} from 'react';

import '../App.css'
import User from "./User";
import {userServices} from "../services/user.services";
import {postsServices} from "../services/posts.services";
import UserDetails from "./UserDetails";
import Posts from "./Posts";

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        userServices.getAll()
            .then(users => setUsers(users))
    }, [])

    const getUserId = (id) => {
        userServices.getId(id)
            .then(user => setUser(user))
    }
    const getPosts = (id) => {
        postsServices.getPostsServ(id)
            .then(posts => setPosts(posts))
    }
    return (
        <div>
            <div className='userWrap'>
                <div>{users.map(item => <User key={item.id} user={item} getUserId={getUserId}/>)}</div>
                <div><UserDetails user={user} posts={posts} getPosts={getPosts}/></div>
            </div>
            {posts && <div><Posts posts={posts}/></div>}
        </div>
    );
};

export default Users;