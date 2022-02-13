import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import css from "../../Containers/moviePage.module.css";
import {MoviesList} from "../MoviesList/MoviesList";
import {GenreNav} from "../GenreNav/GenreNav";
import Upcoming from "../Upcoming/Upcoming";

const SearchPage = () => {
    const {searchResults, statusSearchResults} = useSelector(state => state['movieReducer'])
    console.log(searchResults)


    return (
        <div >
            <GenreNav/>
            <Upcoming/>
            <div className={css.moviePageWrap}>
                {statusSearchResults && <h1>Load...</h1>}
                {searchResults.results && searchResults.results.map(movie => <MoviesList key={movie.id} movie={movie}/>)}

            </div>
        </div>
    );
};

export default SearchPage;