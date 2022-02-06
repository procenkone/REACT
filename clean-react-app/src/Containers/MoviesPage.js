import React, {useEffect} from 'react';
import {MoviesList} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovie} from "../store";

const MoviesPage = () => {
    const dispatch = useDispatch();

    const {movies:{results,page,total_pages},error,status} = useSelector(state=>state['movieReducer']);
    console.log(error,status)

    useEffect(() => {
        dispatch(getAllMovie())
    }, [])

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {results && results.map(movie=><MoviesList key={movie.id} movie={movie}/>)}

        </div>
    );
};

export {MoviesPage};