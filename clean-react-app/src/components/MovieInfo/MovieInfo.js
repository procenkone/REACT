import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";

import {getMovieActor, getMovieComments, getMovieInfo, getMovieVideo} from "../../store";
import css from './movieInfo.module.css'
import {axiosServices, movieServices} from "../../services";

const MovieInfo = () => {
    const dispatch = useDispatch()
    const {state: poster} = useLocation()
    const {id} = useParams()
    const {
        movieInfo,
        videos,
        statusInfo,
        error,
        comments: {results: comments},
        actor,
        statusActor
    } = useSelector(state => state['movieReducer'])
    const actors = actor.cast && actor.cast.filter(item => item.popularity > 10)
    console.log( actors)

    const posterPath = 'https://image.tmdb.org/t/p/w500'
    const defUrl = 'https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg'
    const base = 'https://secure.gravatar.com/avatar/'


    useEffect(() => {
        dispatch(getMovieInfo(id))
        dispatch(getMovieComments(id))
        dispatch(getMovieVideo(id))
        dispatch(getMovieActor(id))
    }, [id])


    const video = videos && videos.results[0].key

    function truncate(str, maxlength) {
        return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
    }

    return (
        <div className={css.movieInfoWrap}>
            {statusInfo && <h1>Loading...</h1>}
            {
                movieInfo &&
                <div className={css.allContent}>
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
                            <li>Актеры: {actors && actors.map(actor => <span
                                key={actor.id}>{actor.name},</span>)}</li>

                        </ul>
                    </div>
                    <div className={css.video}>
                        {videos &&
                            <iframe width="560" height="315"
                                    src={`https://www.youtube.com/embed/${video}?append_to_response=videos`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        }
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
                                <div className={css.content}>{truncate(comment.content, 200)}</div>
                            </div>)}
                    </div>
                </div>

            }
        </div>
    );
};

export {MovieInfo};