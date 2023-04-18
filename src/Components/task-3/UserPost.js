const UserPost = ({userPost}) => {
    return (
        <div>
            <div>userId - {userPost.userId}</div>
            <div>title - {userPost.title}</div>
            <div>body - {userPost.body}</div>
        </div>
    );
};

export {UserPost};