const Post = ({post, setPostDetails}) => {
    return (
        <div>
            <div>id - {post.id} </div>
            <div>title - {post.title} </div>
            <button onClick={() => setPostDetails(post)}>
                Details </button>
        </div>
    );
};

export {Post};