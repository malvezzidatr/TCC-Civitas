/* eslint-disable no-undef */
import axios from "axios";
import React, { useEffect } from "react";

import Routes from "./routes.js";

const url = "http://localhost:3333";

function App() {
    useEffect(() => {
        // post example
        axios
            .post(
                `${url}/users/auth/login`,
                {
                    email: "caiomalvezzi101@gmail.com",
                    password: "caio12345",
                },
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods":
                            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                        "Content-Type": "application/json; charset=utf-8",
                        "Access-Control-Allow-Headers":
                            "Origin, Content-Type, X-Auth-Token",
                    },
                }
            )
            .then((response) => {
                localStorage.setItem("token", response.data.token);
            });
        // get example
        axios
            .get(`${url}/users`, {
                headers: {
                    Authorizations: `Bearer ${localStorage.getItem("token")}`,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods":
                        "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Headers":
                        "Origin, Content-Type, X-Auth-Token",
                },
            })
            .then((response) => {
                console.log(response);
            });
    });
    // eslint-disable-next-line no-undef
    return (
        <div className="App">
            <Routes />
        </div>
    );
}

export default App;
