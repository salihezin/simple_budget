import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getDatabase, onValue, ref, push} from "firebase/database";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../config/firebase";
import NoCardContainer from "../container/noCardContainer";
import {Card} from "primereact/card";
import {Tooltip} from "primereact/tooltip";
import {Badge} from "primereact/badge";
import AssetCard from "../container/assetCard";

const Home = () => {
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();
    const [records, setRecords] = useState([]);
    const [cards, setCards] = useState([]);
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
                    const nodes = [];
                    Object.keys(data).forEach((key) => {
                        data[key].id = key;
                        nodes.push(data[key]);
                    });
                    setCards(nodes);
                }
            }
        );
    }, [auth]);

    const hasCards = cards.length > 0;

    return (
        <div style={{marginLeft: 180, marginRight: 180}}>
            <h1>Merhaba {auth.user?.split('@')[0]}</h1>
            {hasCards ? <AssetCard cards={cards}/> :
                <NoCardContainer firebasePush={push} realTimeRef={realTimeRef} navigate={navigate}/>}
        </div>
    );
}

export default Home;
