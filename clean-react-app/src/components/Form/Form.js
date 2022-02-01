import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createCar} from "../../store";
import css from './form.module.css'
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validator/car.validator";

const Form = () => {
    const {handleSubmit, register, reset, formState: {errors}} = useForm({resolver: joiResolver(carValidator)})
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(createCar({data}))
        reset()
    }
    return (
        <div className={css.form}>
            <form className={css.formInputBlock} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Model: <input type={'text'} {...register('model')}/></label>
                    {errors.model && <h5>{errors.model.message}</h5>}
                </div>
                <div>
                    <label>Year:<input type={'text'} {...register('year')}/></label>
                    {errors.year && <h5>{errors.year.message}</h5>}
                </div>
                <div>
                    <label>Price: <input type={'text'} {...register('price')}/></label>
                    {errors.price && <h5>{errors.price.message}</h5>}
                </div>
                <button>save</button>
            </form>
        </div>
    );
};

export default Form;