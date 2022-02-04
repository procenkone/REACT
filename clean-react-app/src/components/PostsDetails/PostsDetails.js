import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, Outlet} from "react-router-dom";

const PostsDetails = () => {
    const [postId, setPostId] = useState({})
    const {state} = useLocation()
    // console.log(comments)

    useEffect(()=>{
        if(state){
            setPostId(state)
        }
    },[state])



    return (
        <div>
            <div>
            PostsDetails
            <div>Id: {postId.id}</div>
            <div>UserId: {postId.userId}</div>
            <div>Title: {postId.title}</div>
            <div>Body: {postId.body}</div>
            <NavLink to={`/posts/${postId.id}/comments`}><button>get comments</button></NavLink>
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsDetails;