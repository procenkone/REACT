import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../services/placeholderService/users.service";


export const getAllUsers = createAsyncThunk(
    'usersSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const allUsers = usersService.getAll()
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
        status:null,
        error:null
    },
    reducers: {
        addUsers: (state, action) => {
            // state.users.push()
        }
    },
    extraReducers: {
        [getAllUsers.pending]: (state,action) => {
        state.status = 'pending'
        state.error = null
        },
        [getAllUsers.fulfilled]:(state,action)=>{
            state.status = 'fulfilled'
            state.users = action.payload
        },
        [getAllUsers.rejected]:(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }

    }
})

const usersReducer = usersSlice.reducer
export const {} = usersSlice.actions

export default usersReducer
