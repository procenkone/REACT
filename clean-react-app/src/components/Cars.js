import React, {useEffect, useState} from 'react';
import {carsServices} from "../axios.services/cars.services";
import Car from "./Car";

const Cars = ({trigger, setTrigger,updateCar}) => {
    const [cars,setCars] = useState()

    useEffect(()=>{
    carsServices.getAll().then(value => setCars(value))
    },[trigger])
    console.log(cars)


    return (
        <div>
            {
               cars && cars.map(car=><Car key={car.id} updateCar={updateCar} car={car} trigger={trigger} setTrigger={setTrigger} />)
            }
        </div>
    );
};

export default Cars;