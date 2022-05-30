import React, { useEffect, useState } from "react";

import "./Profile.css";
import profilePhoto from "../../assets/img/profile.jpg";

import Button from "../../components/Profile/Button/Button.js";
import ProjectsSection from "../../components/Profile/ProjectsSection/ProjectsSection";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState('');
    const url = 'http://localhost:3333'

    useEffect(() => {
        const id = localStorage.getItem('userId')
        axios
            .get(`${url}/users/${id}`)
            .then(response => setUser(response.data));
    },[])

    return (
        <div className="profile">
            <div className="profile__header">
                <div className="profile__background"></div>
                <img
                    src={profilePhoto}
                    alt="Foto de perfil"
                    className="profile__photo"
                ></img>
                <h3 className="profile__name">{user.name}</h3>
            </div>
            
            <Button />
            <ProjectsSection projects={user.projects} userId={user.id} />
        </div>
    );
};

export default Profile;
