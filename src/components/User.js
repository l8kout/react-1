const User = ({user, setUserId}) => {
    return (
        <div>
            <div>id - {user.id}</div>
            <div>email - {user.email}</div>
            <button onClick={ () => setUserId(user.id)}>
                get posts!!! </button>

        </div>
    );
};

export {User};