import {RESET_USER, SET_USER, LOGIN_ERROR} from "../constants";
import {auth} from "../../config/firebase";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";

const setUser = (data) => ({
    type: SET_USER,
    payload: data,
});

const resetUser = () => ({
    type: RESET_USER,
});

const loginFailed = (loginError) => ({
    type: LOGIN_ERROR,
    payload: loginError,
});

export const registerWithEmail =
    (email, password) =>
        (dispatch) => {
            dispatch(resetUser());
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    dispatch(loginUser(email, password));
                })
                .catch((err) => {
                    console.log(err);
                    if (err.code === "auth/email-already-in-use") {
                        console.log("That email address is already in use!");
                        dispatch(loginFailed(err.code));
                    }
                });
        };

export const loginUser =
    (email, password) =>
        (dispatch) => {
            dispatch(resetUser());
            signInWithEmailAndPassword(auth, email, password)
                .then(async (user) => {
                    const usr = user.user;
                    dispatch(setUser(usr));
                })
                .catch((error) => {
                    console.log('error', error);
                    switch (error.code) {
                        case 'auth/user-not-found':
                            dispatch(loginFailed('Böyle bir kullanıcı bulunamadı'));
                            break;
                        case 'auth/invalid-user-credentials':
                            dispatch(loginFailed('Hatalı kullanıcı adı veya şifre girdiniz'));
                            break;
                        case 'auth/invalid-email':
                            dispatch(loginFailed('Geçersiz bir email girdiniz'));
                            break;
                        case 'auth/too-many-requests':
                            dispatch(loginFailed('Çok fazla deneme yaptınız. Lütfen daha sonra tekrar deneyiniz.'));
                            break;
                        case 'auth/network-request-failed':
                            dispatch(loginFailed('İnternet bağlantınızı kontrol ediniz.'));
                            break;
                        case 'auth/user-disabled':
                            dispatch(loginFailed('Kullanıcı hesabınız devre dışı bırakılmıştır.'));
                            break;
                        case 'auth/wrong-password':
                            dispatch(loginFailed('Yanlış şifre girdiniz'));
                            break;
                        default:
                            dispatch(loginFailed('Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.'));
                            break;
                    }
                });
        };

export const loginWithGoogle = () => (dispatch) => {
    dispatch(resetUser());
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            dispatch(setUser(user));
        }).catch((error) => {
        console.log('Giriş hatası:', error);
    });
}


export const logoutUser = () => (dispatch) => {
    auth.signOut().then(() => {
        dispatch(resetUser());
    });
};

