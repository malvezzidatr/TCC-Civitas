import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Login} path="/login" exact />
        </BrowserRouter>
    );
};

export default Routes;
