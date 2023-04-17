const UserPost = ({post}) => {
    return (
        <div>
            <div> id {post.id}</div>
            <div> userId {post.userId}</div>
            <div> title {post.title}</div>
            <div> body {post.body}</div>
        </div>
    );
};

export {UserPost};