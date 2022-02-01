import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments, getCommentsById} from '../../store/commentsSlice'
import {useParams} from "react-router-dom";
import css from './comments.module.css'
const Comments = () => {
    let dispatch = useDispatch();

    const {idPosts} = useParams()

    const {comments, commentsByPosts} = useSelector(state => state['commentsReducer'])

    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    useEffect(() => {
        dispatch(getCommentsById(idPosts))
    }, [idPosts])

    console.log(commentsByPosts)


    return (
        <div className={css.commentsWrap}>

            {
                commentsByPosts && commentsByPosts.map(comment =>
                    <div className={css.commentsItem} key={comment.id}>

                        <div><b>Comment №{comment.id}</b></div>
                        <div><b>Name</b>: {comment.name}</div>
                        <div><b>Body</b>: {comment.body}</div>
                    </div>
                )
            }
        </div>
    );
};

export default Comments;