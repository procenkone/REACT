import {useEffect, useState} from "react";
import './posts.css'

export default function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [])

    return (
        <div className='posts'>
            <ul>
                {
                    posts.map(item => <li key={item.id}>{item.title}</li>)
                }
            </ul>
        </div>
    )
}