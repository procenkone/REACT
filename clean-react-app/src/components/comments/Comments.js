import {useEffect, useState} from "react";

export default function Comments() {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(comments => setComments(comments))
    }, [])

    return (
        <>
            <ul>
                {
                    comments.map(item => <li key={item.id}>{item.body}</li>)
                }
            </ul>
        </>
    )
}