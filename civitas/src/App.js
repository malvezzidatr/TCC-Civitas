/* eslint-disable no-undef */
import React from "react";
import { Helmet } from 'react-helmet';
import './App.css';

import Router from "./routes.js";


function App() {
    // eslint-disable-next-line no-undef
    const TITLE = 'Civitas'
    return (
        <div className="App">
            <Helmet>
                <title>{ TITLE }</title>
                <link rel="shortcut icon" href="logo-laranja.ico" type="image/x-icon" />
            </Helmet>
            <Router />
        </div>
    );
}

export default App;
