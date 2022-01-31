import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts, getPost} from "../../store/postsSlice";
import {useParams} from "react-router-dom";


const PostsByUser = () => {

    const {posts} = useSelector(state => state['postsReducer'])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    const {id} = useParams()

    useEffect(() => {
        dispatch(getPost(id))
    }, [id])

    console.log(posts)

    return (
        <div>
            PostsByUser
        </div>
    );
};

export default PostsByUser;