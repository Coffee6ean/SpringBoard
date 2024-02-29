import React, {useState, useEffect} from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm";
//'https://api.github.com/users/Coffee6ean'

const ProfileViewerWithSearch = () => {
    const [profile, setProfile] = useState(null);
    const [url, setUrl] = useState(`https://api.github.com/users/Coffee6ean`);

    /*
    const search = (term) => {
        setUrl(`https://api.github.com/users/${term}`);

        async function loadProfile() {
            const res = await axios.get(url);
            setProfile(res.data);
        }
        loadProfile();
    };
    */

    const search = (term) => {
        setUrl(`https://api.github.com/users/${term}`)
    }

    useEffect(() => {
        console.log('Loading Data');
        async function loadProfile() {
            const res = await axios.get(url);
            setProfile(res.data);
        }
        loadProfile();
        return () => console.log('Cleaning Up');
    }, [url]);

    return (
        <div>
            {profile ? <h1>Hi {profile.name}</h1> : <h1>Loading...</h1>}
            <ProfileSearchForm search={search}/>
        </div>
    )
}

export default ProfileViewerWithSearch;
