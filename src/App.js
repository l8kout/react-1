import {Posts} from "./Components/task-1/Posts";
import {Flights} from "./Components/task-2/Flights";
import {Users} from "./Components/task-3/Users";
import {useState} from "react";
import {UserPosts} from "./Components/task-3/UserPosts";


const App = () => {
    const [userId, setUserId] = useState(null);


    return (
        <div>
            {/*/!*task-1*!/*/}
            {/*<Posts/>*/}

            {/*/!*task-2*!/*/}
            {/*<Flights/>*/}

            {/*task-3*/}
            <Users setUserId={setUserId}/>

            {
                userId && <UserPosts userId={userId}/>
            }


        </div>
    );
};

export default App;