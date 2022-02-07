import React, {useEffect} from 'react';
import {MoviesList, TopMovie} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovie, getPopular, getPopularity} from "../store";
import css from './moviePage.module.css'
const MoviesPage = () => {
    const dispatch = useDispatch();

    const {movies: {results, page, total_pages},popular, error, status} = useSelector(state => state['movieReducer']);

    useEffect(() => {
        dispatch(getAllMovie())
    }, [])

     useEffect(()=>{
        dispatch(getPopular())
    },[])

    console.log(popular)


    return (
        <div>

            <div className={css.carouselWrap}>
                <div className={css.horizontal}>

                    {popular.results && popular.results.map(movieTop=><TopMovie key={movieTop.id} movie={movieTop}/>)}
                </div>
            </div>

            <div className={css.moviePageWrap}>
                {status === 'pending' && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            </div>

        </div>
    );
};

export {MoviesPage};