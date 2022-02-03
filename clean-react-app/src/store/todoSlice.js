import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: {},
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = {...state.todos, name:action.payload, id:new Date().getFullYear(),status:false}
        }
    }

})

export const todoReducer = todoSlice.reducer
export const {addTodo} = todoSlice.actions
export default todoSlice