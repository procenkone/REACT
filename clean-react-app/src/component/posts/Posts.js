import React from 'react';

const Posts = ({posts}) => {
    return (
        <div>
            {posts && posts.map(item =>
                <h2 key={item.id}><br/>
                    id - {item.id}<br/>
                    title - {item.title}<br/>
                    body - {item.body}
                </h2>
            )}

        </div>
    );
};

export default Posts;