import React from 'react';

const Users = ({users, filter}) => {

    return (
        <div>
            {filter ? filter.map(item => <h2
                    key={item.id}>{item.id}) {item.name} - {item.username} - {item.email}</h2>) :
                users.map(item => <h2 key={item.id}>{item.id}) {item.name} - {item.username} - {item.email}</h2>)}
        </div>
    );
};

export default Users;