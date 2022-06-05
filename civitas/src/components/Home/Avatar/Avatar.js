import React from "react";

import "./Avatar.css";

import avatarPhoto from "../../../assets/img/avatar.jpg";
import { Link } from "react-router-dom";

const Avatar = () => {
    function logout() {
        localStorage.clear()
        window.location.replace("http://localhost:3000");
    }

    return (
        <div className="avatar">
            <img
                src={avatarPhoto}
                alt="Foto do usuário"
                className="avatar__photo"
                onClick={expandMenu}
            ></img>

            <nav className="avatar__menu">
                <Link to={"/profile"}>Meus projetos</Link>
                <Link to={"/"} onClick={logout}>Sair</Link>
            </nav>
        </div>
    );
};

function expandMenu() {
    const menu = document.querySelector(".avatar__menu");

    menu.classList.toggle("active");
}

export default Avatar;
