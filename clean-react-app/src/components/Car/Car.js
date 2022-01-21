import React from 'react';
import {carServices} from "../../services/car.services";

const Car = ({cars,update}) => {
    let {id, model, year, price} = cars

    const delCar = () =>{
        carServices.delete(id).then(value =>update(value)).catch(error=>console.log(error))
    }
    return (
        <div>
            <h2>id: {id}<br/>
                model: {model}<br/>
                year: {year}<br/>
                price: {price}
            </h2>
            <button onClick={delCar}>delete</button>
        </div>
    );
};

export default Car;