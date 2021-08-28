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
    const [waiting, setWaiting] = useState(false)
    const [inputWarn, setInputWarn] = useState(false)

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
            setInputWarn(true)
            return
        }
    
        setInputWarn(false)
    
        
        const databaseRoomRef = await database.ref(`rooms/${roomCode}`).get()
        const roomExist = databaseRoomRef.exists()
        
        if (user && roomExist && databaseRoomRef.val().authorId === user.id){
            setWaiting(true)
            history.push(`admin/rooms/${roomCode}`)
            setWaiting(false)
            return
        }
        
        if(roomExist){
            history.push(`/rooms/${roomCode}`)
        } else {
            setWaiting(false)
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

                    {waiting ? <h3>Joining...</h3> : ""}

                    <form onSubmit={handleJoinRoom}>
                        {inputWarn ? <p>Please type something...</p> : ""}
                        <Input type="text" placeholder="Room code" value={roomCode} onChange={e => {
                            setRoomCode(e.target.value)
                            setInputWarn(false)
                        }} />
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
