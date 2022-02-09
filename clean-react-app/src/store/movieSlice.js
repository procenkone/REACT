import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieServices} from "../services";


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
            console.log(page)
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
            console.log(id)
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
            console.log(id)
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


        popular: [],
        statusPopular: null,
        errorPopular: null
    },
    reducers: {
        reloadPage: (state, action) => {
            console.log(action.payload)
            state.movies = action.payload
        },
        movieInfoDispatch: (state, action) => {
            state.movieInfo = action.payload
        },
        movieCommentsDispatch:(state,action)=>{
            state.comments = action.payload
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
export const {reloadPage, movieInfoDispatch, movieCommentsDispatch} = movieSlice.actions

export {movieReducer}