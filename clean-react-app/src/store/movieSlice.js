import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieServices} from "../services";
import {useEffect} from "react";


export const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async (_, {rejectWithValue}) => {
        try {
            const movie = await movieServices.getAll()
            return movie
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)
export const getPopular = createAsyncThunk(
    'movieSlice/getPopular',
    async (_, {rejectWithValue}) => {
        try {
            const popular = await movieServices.getPopular()
            return popular
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)
export const pagination = createAsyncThunk(
    'movieSlice/pagination',
    async (page, {dispatch}) => {
        try {
            const newPage = await movieServices.paginationMovie(page)
            dispatch(reloadPage(newPage))
        } catch (e) {
            console.log(e.message)
        }
    }
)
export const getMovieInfo = createAsyncThunk(
    'movieSlice/pagination',
    async (id, {dispatch}) => {
        try {
            const movieDetails = await movieServices.movieInfo(id)
            dispatch(movieInfoDispatch(movieDetails))
        } catch (e) {
            console.log(e.message)
        }
    }
)

export const getMovieComments = createAsyncThunk(
    'movieSlice/pagination',
    async (id, {dispatch}) => {
        try {
            const movieComments = await movieServices.reviewsById(id)
            dispatch(movieCommentsDispatch(movieComments))
        } catch (e) {
            console.log(e.message)
        }
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        status: null,
        error: null,
        movieInfo: null,
        comments: [],

        currentPage: 1,//поточна сторінка
        postsPerPage: 5,//скільки постів на сторінці
        currentPost: [],


        popular: [],
        statusPopular: null,
        errorPopular: null
    },
    reducers: {
        reloadPage: (state, action) => {
            state.movies = action.payload
        },

        movieInfoDispatch: (state, action) => {
            state.movieInfo = action.payload
        },
        movieCommentsDispatch: (state, action) => {
            state.comments = action.payload
        },

        paginate: (state, action) => {
            state.currentPage = action.payload
            const indexOfLastPost = state.currentPage * state.postsPerPage
            const indexOfFirstPost = indexOfLastPost - state.postsPerPage
            state.currentPost = state.movies.results.slice(indexOfFirstPost, indexOfLastPost)


        }
    },
    extraReducers: {
        [getAllMovie.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAllMovie.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getPopular.pending]: (state, action) => {
            state.statusPopular = 'pending'
            state.errorPopular = null
        },
        [getPopular.fulfilled]: (state, action) => {
            state.statusPopular = 'fulfilled'
            state.popular = action.payload
        },
        [getPopular.rejected]: (state, action) => {
            state.statusPopular = 'rejected'
            state.errorPopular = action.payload
        }

    }
})

const movieReducer = movieSlice.reducer
export const {reloadPage, movieInfoDispatch, movieCommentsDispatch, paginate} = movieSlice.actions

export {movieReducer}