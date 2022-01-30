import React from 'react';
import axios from "axios";

const Temp = () => {
    fetch('')
        .then()
        .then()
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })

    return (
        <div>

        </div>
    );
};

export default Temp;