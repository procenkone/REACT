import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar} from "../../store";

const Car = ({car}) => {
    const dispatch =  useDispatch()
    return (
        <div className={'car'}>
            <div className={'carWrap'}>
                <div>Id: {car.id}</div>

                <div>Model: {car.model}</div>
                <div>Price: {car.price}</div>
                <div>Year: {car.year}</div>
                <button onClick={()=>dispatch(deleteCar(car.id))}>delete</button>
                <hr/>
                <br/>
            </div>
        </div>
    );
};

export default Car;