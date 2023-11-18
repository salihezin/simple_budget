import React from "react";
import {Button} from "primereact/button";
import SignWithGoogle from "../component/signWithGoogle";

const LoginButtonsContainer = ({navigate, onClick}) => {
    const handleRegisterClick = () => {
        navigate("/register");
    };
    return (
        <>
            <div className="mt8 row space-between display-flex">
                <Button className="w-80" label="GİRİŞ YAP" size={"large"} rounded  onClick={onClick}/>
                <Button label="Kayıt Ol" size={"large"} severity="secondary" outlined rounded onClick={handleRegisterClick}/>
            </div>
            <SignWithGoogle/>
        </>
    )
}

export default LoginButtonsContainer;
