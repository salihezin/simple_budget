import React from "react";
import {InputText} from "primereact/inputtext";
const UsernameInput = ({ username, setUsername, isValid }) => {
    return (
        <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
            </span>
            <InputText
                className={!isValid ? "p-invalid" : null}
                id="username" placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
        </div>
    )
}

export default UsernameInput;
