import React, {useEffect} from 'react';

import Form from "../Form/Form";
import Car from "../Car/Car";
import {useDispatch, useSelector} from "react-redux";
import store from "../../store/store.config";
import {getAllCars} from "../../store";


const Cars = () => {
    const dispatch = useDispatch()
    const {cars, status, error} = useSelector(state=>state['carReducer'])

    useEffect(() => {
        dispatch(getAllCars())
    }, [])
    console.log(cars)

    return (
        <div className={'cars'}>
            <Form/>
            {status === 'pending'&& <h1>Loading</h1>}
            {error&&<h2>{error}</h2>}
            {
                cars.map(car=><Car key={car.id} car={car}/>)
            }

        </div>
    );
};

export default Cars;