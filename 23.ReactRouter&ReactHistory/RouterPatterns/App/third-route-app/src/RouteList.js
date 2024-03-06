import React from "react"
import {Routes, Route, Navigate} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import AdminPage from "./AdminPage";
import Post from "./Post";
import BlogHome from "./BlogHome";
import Home from "./Home";

function RoutesList() {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/users/:username" element={<AdminPage/>}/>
            <Route path="/blog/:slug" element={<Post/>}/>
            <Route path="/blog" element={<BlogHome/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
    );
}

export default RoutesList;
