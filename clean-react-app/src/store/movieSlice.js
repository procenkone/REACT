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


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        status: null,
        error: null,

        popular: [],
        statusPopular: null,
        errorPopular: null
    },
    reducers: {
        reloadPage: (state, action) => {
            console.log(action.payload)
            state.movies = action.payload
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
export const {reloadPage} = movieSlice.actions

export {movieReducer}