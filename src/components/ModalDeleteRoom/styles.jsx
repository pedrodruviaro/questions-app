import styled from "styled-components";

export const ModalDeleteRoom = styled.div`
    position: absolute;
    background-color: #333;
    color: #fff;
    padding: 2rem;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 320px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 100vw rgba(0,0,0, .7);

    p {
        text-transform: uppercase;
        font-size: 1.25rem;
        letter-spacing: 1px;
    }

    span {
        font-size: .9rem;
        text-align: center;
        line-height: 1.5;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 4rem;
    }

    button {
        outline: none;
        border: none;
        background-color: transparent;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all .2s;

        &:hover,
        &:focus{ 
            transform: scale(1.5);
        }

        &:first-child {
            color: #2ecc71;
        }

        &:last-child {
            color: #e74c3c;
        }
        
        svg {
            font-size: 1.5rem;
            pointer-events: none;
        }
    }
`