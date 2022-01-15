import React from 'react';

const User = ({users, getUserId}) => {
    return (
        <div>
            <h2>{users.id}) {users.name} - {users.username}</h2>
            <button onClick={() => getUserId(users.id)}>getDetail</button>
        </div>
    );
};

export default User;