import React, { useEffect, useState } from "react";
import { auth, provider } from "../config";
import { signInWithPopup, signOut } from "firebase/auth";
import "../styles/index.css";


function Signin() {
    const [email, setEmail] = useState('');
    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((userCredential) => {
            const userEmail = userCredential.user.email;
            setEmail(userEmail);
            localStorage.setItem("email", userEmail);
        })
        .catch((error) => {
            console.log("Error occurred during sign-in with Google:", error);
        });
    };

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            setEmail('');
            localStorage.removeItem("email");
        })
        .catch((error) => {
            console.log("Error occurred during sign-out:", error);
        });
    };
    
    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);
    
    return (
    <div>
        {email ? (
        <div className="logout">
            <h2>Bienvenido, {email}!</h2>
            <button className="boton-logout" onClick={handleSignOut}>
                Cerrar Sesion
            </button>
        </div>
        ) : (
        <div>  
        <div className="contenedor2" >
            <h1>Inicio Sesion </h1>
        </div>
        <div className="contenedor3" >
            <button className='button3' onClick={handleSignInWithGoogle}>
                Sign in with Google
            </button>
        </div>
        </div>
    )}
    </div>
    );
}

export default Signin;
