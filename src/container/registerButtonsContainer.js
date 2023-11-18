import React from "react";
import {Button} from "primereact/button";
import SignWithGoogle from "../component/signWithGoogle";

const RegisterButtonsContainer = ({onClick}) => {
    return (
        <>
            <div className="mt8 row space-between display-flex">
                <Button className="w-100" label="KAYDET" size={"large"} rounded onClick={onClick}/>
            </div>
            <SignWithGoogle/>
        </>
    )
}

export default RegisterButtonsContainer;
