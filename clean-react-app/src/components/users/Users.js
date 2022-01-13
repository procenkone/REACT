import {useEffect, useState} from "react";
import './users.css'

import User from "../user/User";

export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }, [])

    return (
        <div className='users'>
            {users.map(item => <User key={item.id} id={item.id} name={item.name}/>)}
        </div>
    )
}