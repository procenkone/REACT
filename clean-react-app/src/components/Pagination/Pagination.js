import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {paginate} from "../../store";

const Pagination = () => {
    const pageNumbers = []//масив зі сторінками
    const {postsPerPage,currentPage} = useSelector(state => state['movieReducer'])//дістали кількість фільмів на сторінці і поточну сторінку
    for (let i = 1; i <= Math.ceil(20 / postsPerPage); i++) {//поділити скільки є всіх постів на кількість постів на сторінці
        pageNumbers.push(i)//
    }
    const dispatch = useDispatch()


    return (
        <div className={'pagination'}>
            {pageNumbers.map(number => (
                <button style={{color:'white'}} key={number} onClick={() => dispatch(paginate(number))} className="btn btn-primary">
                    {number}
                </button>
            ))}
            {/*<button onClick={() => setPostsPerPage(postsPerPage + 10)}>*/}
            {/*    Load more...*/}
            {/*</button>*/}
        </div>
    )
}

export default Pagination