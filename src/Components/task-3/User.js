const User = ({user, setUserId}) => {
    return (
        <div>
            <div>id {user.id}</div>
            <div>name {user.name}</div>
            <div>username {user.username}</div>
            <div>email {user.email}</div>
            <button onClick={ () => setUserId(user.id)} >
                get posts </button>
            <hr/>


        </div>
    );
};

export {User};