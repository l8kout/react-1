import {useEffect, useState} from "react";
import axios from "axios";
import {UserPost} from "./UserPost";

const UserPosts = ({userId}) => {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(value => value.data).then(value => setUserPosts([...value]));
    }, [userId]);

    return (
        <div>
            {
                userPosts.map(userPost => <UserPost key={userPost.id} userPost={userPost}/>)
            }

        </div>
    );
};

export {UserPosts};