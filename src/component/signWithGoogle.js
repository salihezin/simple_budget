import {Button} from "primereact/button";
import {useDispatch} from "react-redux";
import {loginWithGoogle} from "../redux/actions/authActions";
import {useNavigate} from "react-router-dom";

const SignWithGoogle = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleWithGoogle = () => {
        dispatch(loginWithGoogle());
        navigate('/');
    }
    return (
        <Button className="mt8 w-100" label="Google ile giriş yap" size={"large"} icon="pi pi-google"
                severity={"info"} rounded onClick={handleWithGoogle}/>
    )
}

export default SignWithGoogle;
