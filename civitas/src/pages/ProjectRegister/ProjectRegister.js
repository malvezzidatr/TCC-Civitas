import React, { useState } from "react";

import "./ProjectRegister.css";
import ProjectRegisterIMG from "../../assets/img/project-register-SVG.svg";

import Input from "../../components/commum/Input/Input";
import CloseButton from "../../components/Register/CloseButton/CloseButton";
import SendButton from "../../components/Register/SendButton/SendButton";
import SuccessModal from "../../components/Register/SuccessModal/SuccessModal";
import TextArea from "../../components/Register/TextArea/TextArea";

const ProjectRegister = ({}) => {
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [pix, setPix] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="projectContainer">
            <SuccessModal />
            <div className="projectContainer-left">
                <CloseButton
                    className={'closeButton-left'}
                    route={'/profile'}    
                />
                <div className="projectContainer-left--content">
                    <Input
                        placeholder={"Nome do projeto"}
                        type={"text"}
                        value={cpf}
                        onChange={(event) => setCpf(event.target.value)}
                    />
                    <Input
                        placeholder={"Chave pix"}
                        type={"text"}
                        value={pix}
                        onChange={(event) => setPix(event.target.value)}
                    />
                    <TextArea />
                    <SendButton textButton={"Enviar"} />
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
