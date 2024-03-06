import React from "react";
import {useParams, Link, Navigate} from "react-router-dom";

function AdminPage() {
    const {username} = useParams();
    if(username !== "admin") {
        return <Navigate to="/"/>;
    }

    return (
        <div>
            <h1>Welcome back admin!</h1>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default AdminPage;
