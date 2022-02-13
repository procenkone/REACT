import React from 'react';
import {GenreNav} from "../GenreNav/GenreNav";
import Upcoming from "../Upcoming/Upcoming";
import css from "../../Containers/moviePage.module.css";
import {pagination} from "../../store";
import {useDispatch, useSelector} from "react-redux";

const OrderdescPage = () => {
    const dispatch = useDispatch();
    const {latest:{page,total_pages},statusLatest} = useSelector(state => state['movieReducer']);
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

export {OrderdescPage};