import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllMovie, latestMovie, pagination} from "../../store";
import {GenreNav} from "../GenreNav/GenreNav";
import Upcoming from "../Upcoming/Upcoming";
import css from "../../Containers/moviePage.module.css";
import {MoviesList} from "../MoviesList/MoviesList";

const LatestPage = () => {
    const {latest:{page,total_pages},statusLatest} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(latestMovie())
    }, [])
    // console.log(latest && latest)
    return (
        <div>
            <GenreNav/>
            <Upcoming/>
            <div className={css.moviePageWrap}>
                <h1 style={{color:'white', marginLeft: '300px', marginTop:'-600px'}}>Страница в разработке...</h1>

            </div>
            <div className={css.buttonBlock}>
                <button onClick={() => page > 1 && dispatch(pagination(page - 1))}>previous
                </button>
                {page}
                <button onClick={() => page < total_pages && dispatch(pagination(page + 1))}>next</button>
            </div>
        </div>
    );
};

export default LatestPage;