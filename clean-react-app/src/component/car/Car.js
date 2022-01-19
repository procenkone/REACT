import React from 'react';
import {carService} from "../../services/car.service";

const Car = ({car, update}) => {
    let {id, model, price, year} = car
    const delCar = () => {
        carService.deleteById(id).then(value => update(value)).catch(error => console.log(error))
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={delCar}>del</button>
            <hr/>
        </div>
    );
};

export default Car;