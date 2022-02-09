import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";

import {getMovieComments, getMovieInfo} from "../../store";
import css from './movieInfo.module.css'

const MovieInfo = () => {
    const dispatch = useDispatch()
    const {state: poster} = useLocation()
    const {id} = useParams()
    const {movieInfo, comments: {results: comments}} = useSelector(state => state['movieReducer'])

    const posterPath = 'https://image.tmdb.org/t/p/w500'
    const defUrl = 'https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg'
    const base = 'https://secure.gravatar.com/avatar/'


    useEffect(() => {
        dispatch(getMovieInfo(id))
        dispatch(getMovieComments(id))
    }, [id])


    return (
        <div className={css.movieInfoWrap}>
            {
                movieInfo &&
                <div>
                    <div className={css.titleBlock}>
                        <h1>{movieInfo.title} ({movieInfo.release_date.toString().slice(0, 4)})</h1>
                    </div>

                    <div className={css.imgInfoBlock}>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w200${movieInfo.poster_path}`} alt={movieInfo.title}/>
                        </div>
                        <div className={css.overview}>
                            <p>{movieInfo.overview}</p>
                        </div>
                    </div>

                    <div className={css.lastInfo}>
                        <ul>
                            <li>Год: <span>{movieInfo.release_date.toString().slice(0, 4)}</span></li>
                            <li>Страна: <span>{movieInfo && movieInfo.production_countries.map(item => <span
                                key={item.name}>{item.name}</span>)}</span>
                            </li>
                            <li>Жанр: <span>{movieInfo && movieInfo.genres.map((item, i) => <span
                                key={i}>{item.name}, </span>)}</span></li>
                            <li>Продолжительность: <span>{movieInfo.runtime} мин.</span></li>
                            <li>Мировая премьера: <span>{movieInfo.release_date}</span></li>
                        </ul>
                    </div>
                    <div className={css.video}>
                        <video src="../public/One-D.mp4" controls muted autoPlay={"autoplay"}
                               poster={posterPath + poster} preload="auto" loop>
                            video tag is not supported by your browser
                        </video>
                    </div>

                    <div className={css.commentsWrap}>
                        {comments && comments.map(comment =>
                            <div className={css.comments} key={comment.id}>
                                <div className={css.commentsTitle}>
                                    <img
                                        src={comment.author_details.avatar_path === null ? defUrl : comment.author_details.avatar_path.includes(base) ?
                                            comment.author_details.avatar_path.replace(/^./, "") : base + comment.author_details.avatar_path}
                                        alt={comment.id}/>
                                    <span> {comment.author}</span>
                                </div>
                                <div className={css.content}>{comment.content}</div>
                            </div>)}
                    </div>
                </div>

            }
        </div>
    );
};

export {MovieInfo};