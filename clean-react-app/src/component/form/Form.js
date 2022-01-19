import React, {useState} from 'react';

import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/car.validator";
// import {joiResolver} - додаткова бібліотека доя joi для підключення валідатора

const Form = ({update}) => {
    const [formError, setFormError] = useState({})//для запису помилок з бекенду
    const {
        watch, handleSubmit, register, formState: {errors}
    } = useForm({resolver: joiResolver(CarValidator), mode: "onChange"})//хук для роботи з формами. Імпортуємо бібліотеку, деструктуровеєм обєкт хука.
    //watch - як івент, відслідковує подію в реальному часі
    //handleSubmit - колбек для запуска функції обробника форми
    //register - для реєстрації поля в обєкті з велью інпута, це обєкт, в якому задаєм назву ключа в обєкті, можна робити підобєкти через крапку
    //

    const onSubmit = (car) => {
        console.log('onsubmit')
        if (car.updateById) {
            console.log('update')
            carService.update(car.updateById, car)
                .then(value => update(value))
            return
        }
        console.log('after')
        carService.create(car).then(value => {
            update(value)
        })//записали наву машинку на бекенд через сервіс аксіос
            .catch(errors => setFormError(errors.response.data)//відловили помилки і записали в стейт
            )
    }//функція обробки форми


    // watch(value =>console.log(value))//відслідковує подію в реальному часі

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Model: <input {...register('model')} type={'text'} defaultValue={''}/></label>
                    {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                    {errors.model && <span>{errors.model.message}</span>}<br/>

                    <label>Price: <input {...register('price')} type={'text'} defaultValue={''}/></label>
                    {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                    {errors.price && <span>{errors.price.message}</span>}<br/>

                    <label>Year: <input {...register('year')} type={'text'} defaultValue={''}/></label>
                    {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                    {errors.year && <span>{errors.year.message}</span>}
                    <label>Update by id:<input type={'number'} {...register('updateById')}/></label>

                    <input type={'submit'}/>
                </form>
            </div>
            <hr/>
        </div>
    );
};

export default Form;