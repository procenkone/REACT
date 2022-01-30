import React from 'react';
import {carsServices} from "../axios.services/cars.services";

const Car = ({car:{id,year,model,price},setTrigger, updateCar, trigger}) => {

    const delCar = () => {
      carsServices.delById(id).then(value =>setTrigger(!trigger))

    }


    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>Model: {model}</div>
            <div>Year: {year}</div>
            <div>Price: {price}</div>
            <button onClick={delCar}>delete car</button>
            <button onClick={()=>updateCar(id)}>update car</button>

            <br/>
        </div>
    );
};

export default Car;