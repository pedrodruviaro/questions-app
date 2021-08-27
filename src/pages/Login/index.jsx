import React from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { LoginPage } from "./styles";
import { FcGoogle } from "react-icons/fc";

import banner from "../../assets/images/banner.svg";

export default function Index() {
    const { user, signInWithGoogle } = useAuth();
    const history = useHistory();

    async function handleLogin() {
        if (!user) {
            await signInWithGoogle();
        }

        history.push("/home");
    }

    return (
        <LoginPage>
            <div className="left">
                <div>
                    <h1>Make live interations</h1>
                    <p>Easy. Simple. Awesome.</p>
                </div>
                <img src={banner} alt="Banner" />

                <span>&copy; Copyright 2021</span>
            </div>
            <div className="right">
                <div>
                    <h2>Login with just a click</h2>
                    <button onClick={handleLogin}>
                        <FcGoogle />
                        Enter with your Google account
                    </button>
                    <p>or enter in an existent room</p>
                    <form>
                        <input type="text" placeholder="Room code" />
                        <button>Enter</button>
                    </form>
                </div>
            </div>
        </LoginPage>
    );
}
