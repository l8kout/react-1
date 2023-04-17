const User = (user, setUserId) => {
    const {id, userId, title, email} = user

    return (
        <div>
            <div>id - {id}</div>
            <div>userId - {userId}</div>
            <div>title - {title}</div>
            <div>email - {email}</div>
            <button onClick={ () => setUserId(id)} >
                Get Posts
            </button>

        </div>
    );
};

export {User};