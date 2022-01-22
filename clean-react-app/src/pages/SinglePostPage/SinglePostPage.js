import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {postsService} from "../../services/posts.service";

const SinglePostPage = () => {
    const [post, setPost] = useState(null)

    const {id} = useParams()//хук для діставання параметрів з URl
    const {state} = useLocation()//хук для передачі стейту(можна цілого об'єкту)
    const navigate = useNavigate()//хук для кнопок вперед назад по історії

    useEffect(() => {
        if(state){
            setPost(state)
            return
        }
        postsService.getById(id).then(value => setPost({...value}))
    }, [id])

    const toHome =()=>{
        navigate('/')
    }

    const back=()=>{
        navigate(-1)
    }
    return (
        <div>
           <h1> SinglePostPage</h1>
            { post && (
                <div>
                    <button onClick={toHome}>home</button>
                    <button onClick={back}>back</button>
                    <div>Id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                </div>
            )}
        </div>
    );
};

export default SinglePostPage;