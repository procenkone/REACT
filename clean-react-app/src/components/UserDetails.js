import React from 'react';

const UserDetails = ({user}) => {
    console.log(user)
    return (
        <div>
            {user && <h2>
                id: {user.id}<br/>
                name: {user.name}<br/>
                username: {user.username}<br/>
                email: {user.email}

            </h2>}
        </div>
    );
};

export default UserDetails;