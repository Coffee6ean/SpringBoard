import React from "react";
import {useParams} from "react-router-dom";
import BaseGreetings from "./BaseGreetings";

function Post() {
    const val = 'Post';
    return (
        <div>
            <BaseGreetings name={val}/>
        </div>
    );
}

export default Post;
