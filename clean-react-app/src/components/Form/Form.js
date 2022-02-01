import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createCar} from "../../store";
import css from './form.module.css'

const Form = () => {
    const {handleSubmit, register, reset} = useForm()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(createCar({data}))
        reset()
    }
    return (
        <div className={css.form}>
            <form className={css.formInputBlock} onSubmit={handleSubmit(onSubmit)}>
                <label>Model: <input type={'text'} {...register('model')}/></label>
                <label>Year:<input type={'text'} {...register('year')}/></label>
                <label>Price: <input type={'text'} {...register('price')}/></label>
                <button>save</button>
            </form>

        </div>
    );
};

export default Form;