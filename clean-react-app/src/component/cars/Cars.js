import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../car/Car";

const Cars = ({trigger, update}) => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger])
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} update={update}/>)}
        </div>
    );
};

export default Cars;