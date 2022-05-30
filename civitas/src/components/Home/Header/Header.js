import React from "react";

import Logo from "../../../assets/img/logo-laranja.svg";
import Link from "../Link/Link.js";
import Button from "../Button/Button.js";
import Avatar from "../Avatar/Avatar.js";

import "./Header.css";

const Header = () => {
    const logged = localStorage.getItem("userId");

    return (
        <header className="header">
            <img src={Logo} alt="Logo Civitas" className="header__logo"></img>
            {logged ? (
                <Avatar />
            ) : (
                <div className="header__links">
                    <Link name={"Cadastrar"} link={"/register"} />
                    <Button name={"Login"} link={"login"} />
                </div>
            )}
        </header>
    );
};

export default Header;
