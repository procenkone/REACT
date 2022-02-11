import React, {useEffect} from 'react';
import {getGenreList} from "../../store";
import {useDispatch, useSelector} from "react-redux";

const GenresPage = () => {
    const dispatch = useDispatch();

    const {
        movies: {results, page, total_pages},
        popular,
        error,
        status,
        genreList
    } = useSelector(state => state['movieReducer']);

    useEffect(() => {
        dispatch(getGenreList(28))
    }, [])

    console.log(genreList && genreList)

    return (
        <div>

        </div>
    );
};

export {GenresPage};