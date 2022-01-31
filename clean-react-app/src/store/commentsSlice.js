import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsService} from "../services/placeholderService/comments.service";


export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            const comments = await commentsService.getAll()
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
        commentsByPosts: [],
        status: null,
        error: null
    },
    reducers: {
        getCommentsById: (state, action) => {
            state.commentsByPosts = state.comments.filter(comment => comment.postId == action.payload)
        }
    },
    extraReducers: {
        [getAllComments.pending]: (state, action) => {
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
export const {getCommentsById} = commentsSlice.actions


export default commentsReducer