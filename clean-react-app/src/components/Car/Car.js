import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar} from "../../store";
import css from './car.module.css'
const Car = ({car}) => {
    const dispatch =  useDispatch()
    return (
        <div className={css.car}>
            <div className={'carWrap'}>
                <div><b>Id:</b> {car.id}</div>
                <div><b>Model:</b> {car.model}</div>
                <div><b>Price:</b> {car.price}</div>
                <div><b>Year:</b> {car.year}</div>
                <button onClick={()=>dispatch(deleteCar(car.id))}>delete</button>

                <br/>
            </div>
        </div>
    );
};

export default Car;