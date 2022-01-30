import React, {useEffect, useRef} from 'react';
import {useForm} from "react-hook-form";
import {carsServices} from "../axios.services/cars.services";

const Form = ({setTrigger, trigger, id}) => {
    const {reset, handleSubmit, getValues, register} = useForm()

    const updateCar = (newCar) => {
        carsServices.patchCar(id, newCar).then(value => {
            console.log(newCar)
            setTrigger(!trigger)
            reset()

        })
    }
    const submit = (car) => {
        carsServices.create(car).then(value => setTrigger(!trigger))
        reset()
    }

    useEffect(() => {
        const values = getValues()
        console.log(values)
        if (id !== null) {
            updateCar(values)
        }
    }, [id])


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'}  {...register('model')}/>
                <input type={'text'} {...register('year')}/>
                <input type={'text'} {...register('price')}/>
                <input type={'submit'}/>
            </form>
            Form
        </div>
    );
};

export default Form;