import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getDatabase, onValue, ref} from "firebase/database";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../config/firebase";
import {Divider} from 'primereact/divider';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import NoCardContainer from "../container/noCardContainer";

const Home = () => {
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();
    const [records, setRecords] = useState([]);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const realTimeRef = ref(database, auth.userId || 'null');

    useEffect(() => {
        if (!auth.user) {
            navigate('/');
        }
    }, [auth, navigate]);

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        onValue(realTimeRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    console.log('data', data);
                    const nodes = [];
                    Object.keys(data).forEach((key) => {
                        nodes.push(data[key]);
                    });
                    setRecords(nodes);
                }
            }
        );
    }, [auth]);

    console.log('records', records);
    console.log('auth', auth);



    return (
        <div style={{marginLeft: 80, marginRight: 80}}>
            <h1>Merhaba {auth.user?.split('@')[0]}</h1>
            <NoCardContainer/>
        </div>
    );
}

export default Home;
