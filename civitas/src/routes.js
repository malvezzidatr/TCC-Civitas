import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import Profile from "./pages/Profile/Profile.js";
import Register from "./pages/Register/Register.js";
import ProjectRegister from "./pages/ProjectRegister/ProjectRegister.js";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Login} path="/login" exact />
            <Route component={Register} path="/register" exact />
            <Route component={ProjectRegister} path="/project-register" exact />
            <Route component={Profile} path="/profile" exact />
        </BrowserRouter>
    );
};

export default Routes;
