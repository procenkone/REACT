import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([])


    const {idPosts} = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPosts}/comments`)
            .then(response => response.json())
            .then(comments => setComments(comments))

    }, [idPosts])
    console.log(comments)

    return (
        <div>
            Comments
            {comments.map(comment=><div key={comment.id}>
                {comment.name}<br/><hr/>{comment.body}
            </div>)}
        </div>
    );
};

export default Comments;