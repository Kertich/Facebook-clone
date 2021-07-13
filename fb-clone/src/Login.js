import React from 'react';
import Button from '@material-ui/core/Button';
import './Login.css';
import { auth, provider } from "./firebase";


function Login() {
    const signIn = () => {
        // sign in..
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)
        }).catch(error => alert(error.message))
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook - Simple English Wikipedia, the free encyclopedia"   />
  
                <img src="https://media1.fdncms.com/inlander/imager/u/original/2772541/facebook-wordmark-1024x819.png" alt="File:Facebook.svg - Wikipedia"    />

            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
