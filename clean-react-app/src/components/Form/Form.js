import React from 'react';
import {useForm} from "react-hook-form";
import {carServices} from "../../services/car.services";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarVslidator} from "../../validators/car.vslidator";

const Form = ({update}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({resolver:joiResolver(CarVslidator)})
    const onsubmit = (car) => {
        if(car.updateById){
            carServices.update(car,car.updateById).then(value => update(value))
            return
        }
        carServices.create(car).then(value => update(value)).catch(errors=>console.log(errors.response.data))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <label>Model: <input type={'text'} {...register('model')}/></label>
                {errors.model && <span>{errors.model.message}</span>}
                <label>Year: <input type={'text'} {...register('year')}/></label>
                {errors.year && <span>{errors.year.message}</span>}
                <label>Price: <input type={'text'} {...register('price')}/></label>
                {errors.price && <span>{errors.price.message}</span>}
                <label>Update by id: <input type={'text'} {...register('updateById')}/></label>

                <button>create</button>
            </form>

        </div>
    );
};

export default Form;