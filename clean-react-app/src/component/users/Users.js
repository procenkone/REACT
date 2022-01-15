import React, {useEffect, useState} from 'react';
import User from "../user/User";
import UserDetails from "../userDetails/UserDetails";
import '../../App.css'
import Posts from "../posts/Posts";

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }, [])
    const getUserId = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(user => setUser(user))
    }
    const getPosts = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(posts => {
                setPosts(posts)
            } )
    }

    return (
        <div>
            <div className={"usersWrap"}>
                <div>{users.map(item => <User key={item.id} users={item} getUserId={getUserId}/>)}</div>
                <div>{user && <UserDetails user={user} getPosts={getPosts}/>}</div>
            </div>
            {posts && posts.map(itemPost=><Posts key={itemPost.id} posts={itemPost}/>)}

        </div>
    );
};

export default Users;