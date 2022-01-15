import React from 'react';

const Posts = ({posts:{userId, id, title, body}}) => {

    return (
        <div>
            <h2>
                userId - {userId}<br/>
                id - {id}<br/>
                title - {title}<br/>
                body - {body}</h2>
        </div>
    );
};

export default Posts;