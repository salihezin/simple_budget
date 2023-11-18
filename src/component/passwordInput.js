import React from 'react';
import { Password } from 'primereact/password';
const PasswordInput = ({ password, setPassword, label, isValid }) => {
    return (
        <div className="p-inputgroup mt8">
            <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
            </span>
            <Password
                className={!isValid ? "p-invalid" : null}
                id="password"
                placeholder={label}
                feedback={false}
                toggleMask
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    )
}

export default PasswordInput;
