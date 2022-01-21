import React, {useEffect, useState} from 'react';
import {carServices} from "../../services/car.services";
import Car from "../Car/Car";

const Cars = ({trigger,update}) => {
    const [cars,setCars] = useState([])
    useEffect(()=>{
        carServices.getAll().then(value => setCars(value))
    },[trigger])
    return (
        <div>
            {cars.map(item=><Car key={item.id} update={update} cars={item}/>)}
        </div>
    );
};

export default Cars;