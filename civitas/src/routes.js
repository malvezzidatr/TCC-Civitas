import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Hello from "./pages/Hello.js";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Hello} path="/hello" exact />
        </BrowserRouter>
    );
};

export default Routes;
