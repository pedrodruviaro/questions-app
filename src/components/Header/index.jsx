import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Header } from './styles'
import toast, { Toaster } from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";
import { BiCheckDouble } from "react-icons/bi";
import { useAuth } from '../../hooks/useAuth';
import { ButtonFilled } from '../ButtonFilled';


export default function Index({handleLogin}) {

    const { user } = useAuth();

    const params = useParams().id;
    const [showCopied, setShotCopied] = useState(false);

    // copying to clippboard
    const notifyCopyToClipboard = () => toast.success("Copied!");

    function copyRoomCode() {
        navigator.clipboard.writeText(params);
        notifyCopyToClipboard();
        setShotCopied(true);

        setTimeout(() => {
            setShotCopied(false);
        }, 2500);
    }

    return (
        <Header>
            <div className="room-infos">
                    <div className="logo">

                    </div>
                    <div className="copy-container">
                        <span style={{fontWeight: 600}} >Room</span>
                        <span>{params}</span>
                        <button onClick={copyRoomCode}>
                            {showCopied ? <BiCheckDouble /> : <MdContentCopy />}
                        </button>
                        <Toaster
                            toastOptions={{
                                duration: 2500,
                            }}
                        />
                    </div>
                </div>
                {user ? (
                    <div className="user-infos">
                        <img src={user.avatar} alt={user.name} />
                        <span>{user.name}</span>
                    </div>
                ) : (
                    <ButtonFilled margin="0" onClick={handleLogin}>Sign In</ButtonFilled>
                )}
        </Header>
    )
}
