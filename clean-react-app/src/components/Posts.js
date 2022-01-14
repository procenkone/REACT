const Posts = ({posts}) => {
    return (
        <div>
            {posts && posts.map(item =>
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <h3>{item.body}</h3>
                </div>
            )}

        </div>
    );
};

export default Posts;