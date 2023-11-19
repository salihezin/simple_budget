import React, {useEffect, useRef, useState} from "react";
import PasswordInput from "../../component/passwordInput";
import LoginButtonsContainer from "../../container/loginButtonsContainer";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import EmailInput from "../../component/emailInput";
import {
    emailIsNotValid,
    loginFailed,
    loginFailedToast,
    loginSuccessToast,
    passwordIsNotValid
} from "../../constants/toast";
import {loginUser} from "../../redux/actions/authActions";
import {Toast} from 'primereact/toast';

const Login = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const toastBottomCenter = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (auth.user) {
            showMessage(loginSuccessToast('Giriş başarılı. ' + auth.user));
        } else if (auth.loginError) {
            showMessage(loginFailedToast(auth.loginError));
        }
    }, [auth]);

    const handleLogin = () => {
        const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
        const passwordRegex = /^[a-zA-Z0-9._:$!%-]{6,}$/;
        if (emailRegex.test(email) && passwordRegex.test(password)) {
            try {
                dispatch(loginUser(email, password));
            } catch (e) {
                console.log('e', e);
                showMessage(loginFailedToast(e.message));
            }

        } else if (!emailRegex.test(email)) {
            setIsEmailValid(false);
            showMessage(emailIsNotValid);
        } else if (!passwordRegex.test(password)) {
            setIsEmailValid(true);
            setIsPasswordValid(false);
            showMessage(passwordIsNotValid);
        } else {
            showMessage(loginFailed);
        }
    }

    const showMessage = (message) => {
        toastBottomCenter.current.show(message);
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: '33%',
            margin: 'auto',
            marginTop: '32px',
            marginBottom: '32px',
        }}>
            <EmailInput email={email} setEmail={setEmail} isValid={isEmailValid}/>
            <PasswordInput
                password={password}
                setPassword={setPassword}
                label="Şifre"
                isValid={isPasswordValid}/>
            <LoginButtonsContainer navigate={navigate} onClick={handleLogin}/>
            <Toast ref={toastBottomCenter} position="bottom-center"/>
        </div>
    )
}

export default Login;
