import React from "react";

import "./Profile.css";
import profilePhoto from "../../assets/img/profile.jpg";

import Button from "../../components/Profile/Button/Button.js";
import ProjectsSection from "../../components/Profile/ProjectsSection/ProjectsSection";

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__header">
                <div className="profile__background"></div>
                <img
                    src={profilePhoto}
                    alt="Foto de perfil"
                    className="profile__photo"
                ></img>
                <h3 className="profile__name">Caio Vinícius Malvezzi</h3>
            </div>

            <Button />

            <ProjectsSection />
        </div>
    );
};

export default Profile;
