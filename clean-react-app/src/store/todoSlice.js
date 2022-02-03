import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({name: action.payload.todo, id: new Date().getTime(), status: false})
        },
        deleteTodo: (state, action) => {
            console.log(action.payload.id)
            const index = state.todos.findIndex(item => item.id === action.payload.id);
            state.todos.splice(index, 1)
        },
        changeStatus: (state, action) => {
            console.log(action.payload.id)
            const todo = state.todos.find(item => item.id === action.payload.id);
            todo.status = !todo.status
        }
    }

})

export const todoReducer = todoSlice.reducer
export const {addTodo, deleteTodo, changeStatus} = todoSlice.actions
export default todoSlice