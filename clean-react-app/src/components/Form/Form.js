import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createCar} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset} = useForm()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        console.log(data)
        dispatch(createCar({data}))
        reset()
    }
    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Model: <input type={'text'} {...register('model')}/></label>
                <label>Year:<input type={'text'} {...register('year')}/></label>
                <label>Price: <input type={'text'} {...register('price')}/></label>
                <button>save</button>
            </form>
            Form
        </div>
    );
};

export default Form;