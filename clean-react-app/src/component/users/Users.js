import React, {useEffect, useState} from 'react';

import '../../App.css'
import User from "../user/User";
import UserDetails from "../userDetails/UserDetails";
import Posts from "../posts/Posts";
import {getUsers} from "../../services/user.services";
import {getPost} from "../../services/posts.services";

const Users = () => {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        getUsers.getAll()
            .then(users => setUsers(users))
    }, [])

    const getUserId = (id) => {
        getUsers.getIdUser(id)
            .then(user => setUser(user))
        setPosts([])
    }

    const getPosts = (id) => {
        getPost.get(id)
            .then(posts => {
                setPosts(posts)
            })
    }

    return (
        <div>
            <div className={"usersWrap"}>
                <div>{users.map(item => <User key={item.id} users={item} getUserId={getUserId}/>)}</div>
                <div>{user && <UserDetails user={user} getPosts={getPosts}/>}</div>
            </div>
            {posts && <Posts posts={posts}/>}
        </div>
    );
};

export default Users;