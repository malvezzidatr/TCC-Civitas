import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import Profile from "./pages/Profile/Profile.js";
import Register from "./pages/Register/Register.js";
import ProjectRegister from "./pages/ProjectRegister/ProjectRegister.js";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/register" />
                <Route element={<ProjectRegister />} path="/project-register" />
                <Route element={<Profile />} path="/profile" />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
