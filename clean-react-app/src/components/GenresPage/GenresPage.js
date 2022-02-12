import React, {useEffect} from 'react';
import {getGenreList, pagination, paginationGenre} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import css from './generesPage.module.css'
import {GenreNav} from "../GenreNav/GenreNav";
import Upcoming from "../Upcoming/Upcoming";
import {MoviesList} from "../MoviesList/MoviesList";

const GenresPage = () => {
    const dispatch = useDispatch();

const {genreId}= useParams()

    const {
        genreList: {results, page, total_pages},
        statusByGenreList
    } = useSelector(state => state['movieReducer']);

    useEffect(() => {
        dispatch(getGenreList(genreId))
    }, [genreId])
    return (
        <div>
            <div className={css.navigate}><span>Навигация</span></div>
            <GenreNav/>
            <Upcoming/>

            <div className={css.moviePageWrap}>
                {statusByGenreList && <h1>Loading...</h1>}
                {results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.buttonBlock}>
                <button onClick={() => page > 1 && dispatch(paginationGenre({genreId:genreId, page: page -1}))}>previous
                </button>
                {page}
                <button onClick={() => page < total_pages && dispatch(paginationGenre({genreId:genreId, page:page +1}))}>next</button>
            </div>
        </div>
    );
};

export {GenresPage};