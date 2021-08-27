import styled from "styled-components";

export const Header = styled.header`
    grid-area: header;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1rem 1.5rem;

    .room-infos {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .copy-container {
        border: 1px solid ${(props) => props.theme.accent};
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        background-color: #fff;

        button {
            border: none;
            background-color: transparent;
            color: ${(props) => props.theme.accent};
            font-size: 1.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            cursor: pointer;
        }
    }

    .user-infos {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        span {
            font-size: 0.9rem;
        }
    }
`;
