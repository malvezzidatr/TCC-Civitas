import React from "react";

import "./Profile.css";
import noProjectIcon from "../../assets/img/icon-no-project.svg";
import profilePhoto from "../../assets/img/profile.jpg";

import Button from "../../components/Profile/Button/Button.js";

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__background"></div>
            <img
                src={profilePhoto}
                alt="Foto de perfil"
                className="profile__photo"
            ></img>
            <h3 className="profile__name">Caio Vinícius Malvezzi</h3>

            <Button />

            <section className="profile-section">
                <h2 className="profile-section__title">Meus projetos</h2>

                <div className="no-projects">
                    <img src={noProjectIcon} alt="Sem projetos"></img>
                    <p>Você ainda não tem projetos cadastrados</p>
                </div>
            </section>
        </div>
    );
};

export default Profile;
