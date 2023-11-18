import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getDatabase, onValue, ref, push} from "firebase/database";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../config/firebase";
import NoCardContainer from "../container/noCardContainer";

const Home = () => {
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();
    const [records, setRecords] = useState([]);
    const [cards, setCards] = useState([]);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const realTimeRef = ref(database, 'authuserId' || 'null');

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
                    const nodes = [];
                    Object.keys(data).forEach((key) => {
                        nodes.push(data[key]);
                    });
                    setCards(nodes);
                }
            }
        );
    }, [auth]);

    const hasCards = cards.length > 0;

    return (
        <div style={{marginLeft: 80, marginRight: 80}}>
            <h1>Merhaba {auth.user?.split('@')[0]}</h1>
            {hasCards ? <div>has cards</div> :
                <NoCardContainer firebasePush={push} realTimeRef={realTimeRef} navigate={navigate}/>}
        </div>
    );
}

export default Home;
