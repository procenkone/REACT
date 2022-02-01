import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../services/placeholderService/users.service";


export const getAllUsers = createAsyncThunk(
    'usersSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const allUsers = await usersService.getAll()
            return allUsers
        } catch (e) {
            return rejectWithValue(e.message)

        }
    }
)


const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: [],
        user: [],
        status: null,
        error: null
    },


    reducers: {
        getUser: (state, action) => {
            state.user = state.users.filter(user=>user.id == action.payload)
        }
    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }

    }
})

const usersReducer = usersSlice.reducer
export const {getUser} = usersSlice.actions

export default usersReducer
