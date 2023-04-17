import {Users} from "./components/task3/Users";
import {UserPosts} from "./components/task3/UserPosts";
import {useState} from "react";

const App = () => {
    const [userId, setUserId] = useState(null);

    return (
        <div>
            <Users setUserId={setUserId}/>

            {userId && <UserPosts userId={userId}/>}



        </div>
    );
};

export default App;


