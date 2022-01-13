import React from 'react';

const User = ({user: {id, name, email}, getUserId}) => { //приняли функцию
    return (
        <div>
            <h2>{id}-{name}-{email}</h2>
            <button onClick={() => getUserId(id)}>GetDetails</button>
        </div>
    );
};

export default User;