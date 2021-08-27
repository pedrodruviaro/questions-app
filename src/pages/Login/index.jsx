import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { LoginPage } from "./styles";
import { FcGoogle } from "react-icons/fc";

import HeroBox from '../../components/HeroBox'
import { database } from "../../services/firebase";
import toast, {Toaster} from 'react-hot-toast'
import {ButtonFilled} from '../../components/ButtonFilled'
import {Input} from '../../components/Input'

export default function Index() {
    const { user, signInWithGoogle } = useAuth();
    const history = useHistory();
    const [roomCode, setRoomCode] = useState("")

    // toast
    const notifyError = () => toast.error('Room closed or not existent!')

    async function handleLogin() {
        if (!user) {
            await signInWithGoogle();
        }

        history.push("/home");
    }

    async function handleJoinRoom(e){
        e.preventDefault()
        const input = e.target[0]

        if(roomCode.trim() === ""){
            return
        }

        const databaseRoomRef = await database.ref(`rooms/${roomCode}`).get()
        const roomExist = databaseRoomRef.exists()

        if (user && databaseRoomRef.val().authorId === user.id){
            history.push(`admin/rooms/${roomCode}`)
            return
        }
        
        if(roomExist){
            history.push(`/rooms/${roomCode}`)
        } else {
            notifyError()
            input.focus()
            return
        }
    }

    return (
        <LoginPage>
            <HeroBox />
            <div className="right">
                <div>
                    <h2>Login with just a click</h2>
                    <button onClick={handleLogin}>
                        <FcGoogle />
                        Enter with your Google account
                    </button>
                    <p>or enter in an existent room</p>
                    <form onSubmit={handleJoinRoom}>
                        <Input type="text" placeholder="Room code" value={roomCode} onChange={e => setRoomCode(e.target.value)} />
                        <ButtonFilled type="submit">Enter</ButtonFilled>
                    </form>
                </div>
            </div>

            <Toaster 
                toastOptions={{
                    duration: 2500
                }}
            />
        </LoginPage>
    );
}
