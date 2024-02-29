import React, {useState, useEffect} from "react";
import axios from 'axios';
//'https://api.github.com/users/Coffee6ean'

const ProfileViewer = ({name='Coffee6ean', color='purple'}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadProfile() {
            const res = await axios.get(`https://api.github.com/users/${name}`);
            setData(res.data.name);
        }
        loadProfile();
    }, [name]);

    return (
        <h3 style={{color}}>{data ? data : "Loading..."}</h3>
    )
}

export default ProfileViewer;
