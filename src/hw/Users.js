import {User} from "./User";
import {useEffect, useState} from "react";

const Users = () => {
    const [users, setUser] = useState([]);

    useEffect(()=>{

    })

    return (
        <div>
            <User/>
        </div>
    );
};

export {Users};