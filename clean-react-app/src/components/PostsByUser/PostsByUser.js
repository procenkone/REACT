import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {getAllPosts} from "../../store/postsSlice";
import css from './postsByUser.module.css'

const PostsByUser = () => {
    const {posts} = useSelector(state => state['postsReducer'])
    const dispatch = useDispatch()

    const {id} = useParams()

    useEffect(() => {
        dispatch(getAllPosts({id}))
    }, [id])


    return (
        <div className={css.postsWrap}>
            <div>
                {
                    posts && posts.map(post =>
                        <div className={css.postsItem} key={post.id}>
                            <div><b>Post № {post.id}</b></div>
                            <div><b>Title: </b>{post.title}</div>
                            <div><b>Body: </b>{post.body}</div>
                            <NavLink to={`/users/${id}/posts/${post.id}/comments`}>
                                <button>get comments</button>
                            </NavLink>
                        </div>)
                }</div>
            <div className={'outletComments'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsByUser;