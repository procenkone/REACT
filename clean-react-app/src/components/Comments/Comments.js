import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import css from './comments.module.css'
import {commentsServices} from "../../services/comments.services";

const Comments = () => {
    const {state} = useLocation()
    const [comments, setComments] = useState(null)
    useEffect(() => {
        commentsServices.getById(state).then(value => setComments([...value]))
    }, [state])
    return (
        <div className={css.commentsWrap}>
            {comments && comments.map(comment =>
                <div key={comment.id}>
                    <div>PostId:{comment.postId}</div>
                    <div>Id:{comment.id}</div>
                    <div>Name:{comment.name}</div>
                    <div>Email:{comment.email}</div>
                    <div>Body:{comment.body}</div>
                    <hr/>
                    <br/>
                </div>
            )}
        </div>
    );
};

export default Comments;