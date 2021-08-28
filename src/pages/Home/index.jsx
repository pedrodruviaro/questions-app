import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { HomePage } from "./styles";
import HeroBox from "../../components/HeroBox";
import { ButtonFilled } from "../../components/ButtonFilled";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";

export default function Index() {
    const history = useHistory();
    const { user, setIsAdmin } = useAuth();
    const [roomName, setRoomName] = useState("");

    async function handleNewRoom(e) {
        e.preventDefault();

        if (roomName.trim() === "") {
            return;
        }

        const newRoom = {
            title: roomName,
            author: user.name,
            authorId: user.id,
        };

        const firebaseRoom = await database.ref("rooms").push(newRoom);

        const authorRef = await (
            await database.ref(`rooms/${firebaseRoom.key}`).get("authorId")
        ).val().authorId;

        if (authorRef === user.id) {
            setIsAdmin(true)
            history.push(`/admin/rooms/${firebaseRoom.key}`);
            return
        }

        history.push(`/rooms/${firebaseRoom.key}`);
    }

    return (
        <HomePage>
            <HeroBox />
            <div className="right">
                <div>
                    <form onSubmit={handleNewRoom}>
                        <Input
                            type="text"
                            placeholder="Room name"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                        />
                        <ButtonFilled type="submit">Create room</ButtonFilled>
                    </form>
                    <p>
                        Wanna join an existent room?{" "}
                        <Link to="/">Click here</Link>.
                    </p>
                </div>
            </div>
        </HomePage>
    );
}
