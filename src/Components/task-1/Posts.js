import {Post} from "./Post"
import {useEffect, useState} from "react";
import axios from "axios";
const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts').then(value => value.data).then(value => setPosts([...value]));
    }, []);


    return (
        <div>
            {
                postDetails &&
                <div>
                    <div> id - {postDetails.id} </div>
                    <div> userId - {postDetails.userId} </div>
                    <div> title - {postDetails.title} </div>
                    <div> body - {postDetails.body} </div>
                    <hr/>
                </div>
            }

            {
                posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)
            }

        </div>
    );
};

export {Posts};