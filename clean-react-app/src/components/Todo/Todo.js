import React from 'react';
import {useDispatch} from "react-redux";

import {changeStatus, deleteTodo} from "../../store/todoSlice";
import css from './todo.module.css'

const Todo = ({todo: {id, status, name}}) => {
    let dispatch = useDispatch();
    return (
        <div style={{display: 'flex', gap: '10px', margin: '20px', alignItems: 'center'}}>
            <input type={'checkbox'} value={status} onChange={() => dispatch(changeStatus({id}))}/>
            <div className={status ? css.checked : ''}>{name}</div>
            <button onClick={() => dispatch(deleteTodo({id}))}>Delete</button>
        </div>
    );
};

export default Todo;