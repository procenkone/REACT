import React from 'react';

const Posts = ({posts}) => {
    return (
        <div>
            {posts && posts.map(item=>{item.id})}

        </div>
    );
};

export default Posts;