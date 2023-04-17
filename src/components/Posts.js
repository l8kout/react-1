import {Post} from "./Post";
import {useEffect, useState} from "react";
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);


    useEffect( () => {
        axios('https://jsonplaceholder.typicode.com/posts').then(value => value.data).then(value => setPosts([...value]));
    }, [] )


    return (
        <div>

            {post &&
                <div>
                    <div> id - {post.id}</div>
                    <div> userId - {post.userId}</div>
                    <div> title - {post.title}</div>
                    <div> body - {post.body}</div>
                </div>
            }

            {posts.map(post => <Post kay={post.id} post={post} setPost={setPost}/>)}

        </div>
    );
};

export {Posts};