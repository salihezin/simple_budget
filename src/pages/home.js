import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
const Home = () => {
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.user) {
            navigate('/');
        }
    }, [auth, navigate]);

    return (
        <div>
            <h1>Home Page {auth.userId}</h1>
        </div>
    )
}

export default Home;
