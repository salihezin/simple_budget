import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import PasswordInput from "../component/passwordInput";
import RegisterButtonsContainer from "../container/registerButtonsContainer";
import EmailInput from "../component/emailInput";
import {Toast} from 'primereact/toast';
import {emailIsNotValid, loginFailed, passwordAgainIsNotSame, passwordIsNotValid} from "../constants/toast";
import {useDispatch} from "react-redux";
import {registerWithEmail} from "../redux/actions/authActions";

const Register = () => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isPasswordAgainSame, setIsPasswordAgainSame] = useState(true);
    const toastBottomCenter = useRef(null);
    const dispatch = useDispatch();

    //handling window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleRegister = () => {
        const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
        const passwordRegex = /^[a-zA-Z0-9._:$!%-]{6,}$/;
        if (emailRegex.test(email) && passwordRegex.test(password) && password === passwordAgain) {
            dispatch(registerWithEmail(email, password));
            navigate('/');
        } else if (!emailRegex.test(email)) {
            setIsEmailValid(false);
            showMessage(emailIsNotValid);
        } else if (!passwordRegex.test(password)) {
            setIsEmailValid(true);
            setIsPasswordValid(false);
            showMessage(passwordIsNotValid);
        } else if (password !== passwordAgain) {
            setIsEmailValid(true);
            setIsPasswordValid(true);
            setIsPasswordAgainSame(false);
            showMessage(passwordAgainIsNotSame);
        } else {
            showMessage(loginFailed);
        }
    }

    const showMessage = (message) => {
        toastBottomCenter.current.show(message);
    };

    return (
        <div className="p24" style={{paddingRight: windowWidth / 3, paddingLeft: windowWidth / 3}}>
            <EmailInput email={email} setEmail={setEmail} isValid={isEmailValid}/>
            <PasswordInput
                password={password}
                setPassword={setPassword}
                label="Şifre"
                isValid={isPasswordValid}/>
            <PasswordInput
                password={passwordAgain}
                setPassword={setPasswordAgain}
                label="Şifre Tekrar"
                isValid={isPasswordAgainSame}/>
            <RegisterButtonsContainer onClick={handleRegister}/>
            <Toast ref={toastBottomCenter} position="bottom-center"/>
        </div>
    )
}

export default Register;
