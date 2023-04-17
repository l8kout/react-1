import {useEffect, useState} from "react";
import {UserPost} from "./UserPost"
import axios from "axios";

const UserPosts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${userId}/post`).then(value => value.data).then(value => setPosts([...value]));
    }, [userId]);

    return (
        <div>
            {posts.map(post => <UserPost key={post.id} post={post} />)}
        </div>
    );
};

export {UserPosts};