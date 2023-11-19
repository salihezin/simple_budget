import React, {useEffect, useState} from 'react';
import MenubarContainer from "./menubarContainer";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../config/firebase";
import {getDatabase, ref} from "firebase/database";
import Login from "../pages/login/login";
import NotLoggedIn from "../pages/login/notLoggedIn";
import {ProgressSpinner} from "primereact/progressspinner";

const BaseContainer = ({children}) => {
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const realTimeRef = ref(database, auth.userId || 'null');
    const [loggedUser, setLoggedUser] = useState();
    const [userLoading, setUserLoading] = useState(false);

    useEffect(() => {
        if (auth.userLoggingIn) {
            setUserLoading(true);
        } else if (auth.isLoggedIn) {
            setUserLoading(false);
            setLoggedUser(auth);
        } else {
            setUserLoading(false);
            setLoggedUser(null);
        }
    }, [auth]);

    console.log('auth', auth);

    const isLoggedIn = () => loggedUser ? renderPage() : navigate('/', {replace: true});

    const choosePage = () => userLoading ? <ProgressSpinner/> : isLoggedIn();

    const renderPage = () => <>
        <MenubarContainer/>
        {children}
    </>;


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
            {choosePage()}
        </div>
    )
}

export default BaseContainer;
