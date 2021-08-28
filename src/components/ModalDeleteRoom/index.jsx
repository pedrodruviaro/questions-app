import React from "react";
import { ModalDeleteRoom } from "./styles";
import { ImCheckmark, ImCross } from "react-icons/im";

export default function Index({ endRoom, closeModal }) {

    return (
        <ModalDeleteRoom>
            <p>You really Wanna End This Room?</p>
            <span>By doing this, you will lose all questions present in this room forever. Are you sure?</span>
            <div>
                <button onClick={endRoom}>
                    <ImCheckmark />
                </button>
                <button onClick={closeModal}>
                    <ImCross />
                </button>
            </div>
        </ModalDeleteRoom>
    );
}
