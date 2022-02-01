import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsService} from "../services/placeholderService/comments.service";


export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async ({idPosts}, {rejectWithValue}) => {
        try {
            const comments = await commentsService.getById(idPosts)
            return comments
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllComments.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.comments = action.payload
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const commentsReducer = commentsSlice.reducer
export const {} = commentsSlice.actions


export default commentsReducer