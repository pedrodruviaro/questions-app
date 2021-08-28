import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Header } from './styles'
import toast, { Toaster } from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";
import { BiCheckDouble } from "react-icons/bi";
import { useAuth } from '../../hooks/useAuth';
import { ButtonFilled } from '../ButtonFilled';
import ModalDeleteRoom from '../ModalDeleteRoom'
import { database } from '../../services/firebase';


export default function Index({handleLogin}) {

    const { user, isAdmin } = useAuth();
    const history = useHistory()
    const params = useParams().id;
    const [showCopied, setShotCopied] = useState(false);
    const [modalOpen, setModalOpen] = useState(false)

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

    async function endRoom(roomId){
        await database.ref(`rooms/${roomId}`).remove()
        history.push('/home')
    }

    function closeModal(){
        setModalOpen(false)
    }

    return (
        <Header>
            <div className="room-infos">
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
                    {isAdmin ? <ButtonFilled onClick={() => setModalOpen(!modalOpen)}>Close Room</ButtonFilled> : ""}
                </div>
                {user ? (
                    <div className="user-infos">
                        <img src={user.avatar} alt={user.name} />
                        <span>{user.name}</span>
                    </div>
                ) : (
                    <ButtonFilled margin="0" onClick={handleLogin}>Sign In</ButtonFilled>
                )}

                {modalOpen ? <ModalDeleteRoom endRoom={() => endRoom(params)} closeModal={closeModal} /> : ""}
        </Header>
    )
}
