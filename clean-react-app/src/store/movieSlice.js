import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieServices} from "../services";


export const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async (_, {rejectedWithValue}) => {
        try {
            const movie = await movieServices.getAll()
            return movie
        } catch (e) {
            return rejectedWithValue(e)
        }
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        status: null,
        error: null
    },
    reducers: {},
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
            // console.log(action.payload)
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const movieReducer = movieSlice.reducer
export const {} = movieSlice.actions

export {movieReducer}