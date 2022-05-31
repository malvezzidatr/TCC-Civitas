import React, { useState } from "react";
import axios from "axios";

import "./ProjectRegister.css";
import ProjectRegisterIMG from "../../assets/img/project-register-SVG.svg";

import Input from "../../components/commum/Input/Input";
import CloseButton from "../../components/Register/CloseButton/CloseButton";
import SendButton from "../../components/Register/SendButton/SendButton";
import SuccessModal from "../../components/Register/SuccessModal/SuccessModal";
import TextArea from "../../components/Register/TextArea/TextArea";
import SuccessSVG from '../../assets/img/Success.svg';

const ProjectRegister = ({}) => {
    const [name, setName] = useState("");
    const [pix, setPix] = useState("");
    const [description, setDescription] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const url = "http://localhost:3333";

    function Modal() {
        return (
            <div className='registerProjectModal'>
                <div className='container'>
                    <img src={SuccessSVG} alt="Successo"/>
                    <div>
                        <h1>Tudo certo!</h1>
                        <p>Projeto cadastrado com successo.</p>
                    </div>
                    <button onClick={() => window.location.replace("http://localhost:3000")}>Voltar para o início</button>
                </div>
            </div>
        )
    }

    function registerProject() {
        const id = localStorage.getItem('userId');
        if(name, pix, description) {
            axios
                .patch(
                    `${url}/projects/${id}`,
                    {
                        name,
                        pix,
                        description
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
                ).then((response) => {
                    setIsModalVisible(true);
                });
        }
    }

    return (
        <div className="projectContainer">
            <SuccessModal />
            { isModalVisible ? <Modal /> : null}
            <div className="projectContainer-left">
                <CloseButton
                    className={'closeButton-left'}
                    route={'/profile'}    
                />
                <div className="projectContainer-left--content">
                    <Input
                        placeholder={"Nome do projeto"}
                        type={"text"}
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <Input
                        placeholder={"Chave pix"}
                        type={"text"}
                        value={pix}
                        onChange={(event) => setPix(event.target.value)}
                    />
                    <TextArea 
                        placeholder={"Descreva sobre projeto aqui"}
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <SendButton onClick={registerProject} textButton={"Enviar"} />
                </div>
            </div>
            <div className="projectContainer-right">
                <h1>Complete os campos ao lado para finalizar seu projeto</h1>
                <img src={ProjectRegisterIMG} alt="register" />
            </div>
        </div>
    );
};

export default ProjectRegister;
