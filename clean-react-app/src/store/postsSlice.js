import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../services/placeholderService/posts.service";


export const getAllPosts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const posts = await postsService.getAll()
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
        post:[],
        status: null,
        error: null
    },
    reducers: {
        getPost: (state, action) => {
            state.post = state.posts.filter(post=>post.userId == action.payload)
            //не логається стейт ????????????????
            //я хочу відфільтрувати в масиа пост тільки ті пости у кого є айді яку приходить з ростбайюзер компоненти
        }
    },
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllPosts.fulfilled]:(state, action)=>{
            state.status = 'fulfilled'
            state.posts = action.payload
        },
        [getAllPosts.rejected]:(state, action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const postsReducer = postsSlice.reducer
export const {getPost} = postsSlice.actions

export default postsReducer