import React from "react";
import {InputText} from "primereact/inputtext";
const EmailInput = ({ email, setEmail, isValid }) => {
    return (
        <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
            </span>
            <InputText
                className={!isValid ? "p-invalid" : null}
                id="email"
                placeholder="Kullanıcı Adı"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
        </div>
    )
}

export default EmailInput;
