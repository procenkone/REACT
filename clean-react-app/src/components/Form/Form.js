import React from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/todoSlice";

const Form = () => {
    let dispatch = useDispatch();
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo({todo: e.target.todo.value}))
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <input name={'todo'} type={'text'}/>
                <button>save</button>
            </form>

        </div>
    );
};

export default Form;