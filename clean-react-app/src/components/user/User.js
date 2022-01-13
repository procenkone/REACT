const User = (props) => {
    let {id, name} = props

    return (
        <div>
            <h2>{id}-{name}</h2>
        </div>
    );
};

export default User;