import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../services/placeholderService/posts.service";


export const getAllPosts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async ({id}, {rejectWithValue}) => {
        try {
            const posts = await postsService.getById(id)
            return posts
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


const postsSlice = createSlice({
    name: "postsSlice",
    initialState: {
        posts: [],
        status: null,
        error: null
    },

    reducers: {},

    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const postsReducer = postsSlice.reducer
export const {} = postsSlice.actions

export default postsReducer