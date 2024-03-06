import React from "react";
import BaseGreetings from "./BaseGreetings";

function BlogHome() {
    const val = "Blog Home"
    return (
        <div>
            <BaseGreetings name={val}/>
        </div>
    );
}

export default BlogHome;
