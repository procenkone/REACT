import React, {useEffect, useState} from 'react';
import User from "../user/User";
import UserDetails from "../userDetails/UserDetails";
import '../../App.css'

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }, [])
    const getUserId=(id)=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response=>response.json())
            .then(user=>setUser(user))
    }
    return (
        <div className={"usersWrap"}>
            {users.map(item=><User key={item.id} users={item} getUserId={getUserId}/>)}
            {user && <UserDetails  user={user}/>}
        </div>
    );
};

export default Users;