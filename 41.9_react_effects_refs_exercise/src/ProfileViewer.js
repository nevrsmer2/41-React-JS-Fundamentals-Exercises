import axios from "axios";
import React, { useEffect, useState } from 'react';


function ProfileViewer(name) {
    const [profile, setProfile] = useState(null);

    // this is called *after* component first added to DOM

    useEffect(function fetchUserWhenMounted() {

        async function fetchUser() {

            const userResult = await axios.get(
                `https://api.github.com/users/${name}`);
            setProfile(userResult.data);
            console.log("USER RESULT:", userResult);

        }
        fetchUser();
    }, [name]);

    return (
        <div>{profile ? <h2>{profile.name}</h2> : <i>(loading)</i>}</div>
    );
};



export default ProfileViewer;