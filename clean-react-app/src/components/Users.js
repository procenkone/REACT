import React from 'react';

const Users = ({users}) => {

    return (
        <div>
            {users.map(item=><h2 key={item.id}>{item.id}) {item.name} - {item.username}</h2>)}
        </div>
    );
};

export default Users;