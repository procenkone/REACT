import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Form from "../Form/Form";
import Car from "../Car/Car";
import {getAllCars} from "../../store";
import css from './cars.module.css'

const Cars = () => {
    const dispatch = useDispatch()
    const {cars, status, error} = useSelector(state => state['carReducer'])

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    return (
        <div>
            <Form/>
            {status === 'pending' && <h1>Loading</h1>}
            {error && <h2>{error}</h2>}
            <div className={css.cars}>
                {
                    cars.map(car => <Car key={car.id} car={car}/>)
                }
            </div>
        </div>
    );
};

export default Cars;