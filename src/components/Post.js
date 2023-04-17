const Post = ({post, setPost}) => {
    return (
        <div>
            <div> id - {post.id} </div>
            <div> title - {post.title} </div>
            <button onClick={() => setPost(post)}>
                details
            </button>

        </div>
    );
};

export {Post};