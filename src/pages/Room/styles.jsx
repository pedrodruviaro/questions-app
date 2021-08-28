import styled from "styled-components";

export const RoomPage = styled.div`
    display: grid;
    grid-template-areas:
        "header"
        "main"
        "footer";
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content;
    min-height: 100vh;

    /* main */
    main {
        grid-area: main;
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        padding: 1.5rem;

        .room-info {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            width: fit-content;
            margin: 0 auto;
            margin-bottom: 1.5rem;

            @media (max-width: 600px){
            flex-direction: column;
            }


            h2 {
                font-size: 1.75rem;
                font-weight: 500;
            }

            > span {
                border: 1px solid ${props => props.theme.accent};
                border-radius: 4px;
                padding: .5rem;
                background-color: ${props => props.theme.light};
                font-size: .9rem;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: .5rem;

                strong {
                    color: ${props => props.theme.accent};
                    font-size: 1rem;
                }
            }
        }


        form {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            margin-bottom: 3rem;

            textarea {
                width: 100%;
                resize: vertical;
                min-height: 120px;
                outline: none;
                font-size: 1rem;
                margin-bottom: 1rem;
                padding: 0.5rem;
                border-radius: 4px;
                border: 1px solid gray;
                transition: border-color 0.3s ease-out;

                &:focus {
                    border-color: ${(props) => props.theme.accent};
                }
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            margin-bottom: 1.5rem;

            li {
                background-color: ${(props) => props.theme.light};
                box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
                    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
                border-radius: 4px;
                padding: 1rem;
                width: 100%;

                p {
                    margin-bottom: 2rem;
                }

                > div {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .user-container {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;

                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                    }

                    > span {
                        font-size: 0.9rem;
                        font-weight: 600;
                        color: #969696;
                    }
                }

                .datetime {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #969696;
                }

                .status {
                    color: lightcoral;
                    margin-top: 1rem;
                    margin-left: auto;
                    display: flex;
                    justify-content: flex-end;
                    font-size: .8rem;
                    text-transform: uppercase;
                }
            }
        }
    }

    .warn {
        font-size: .9rem;
        
        button {
            outline: none;
            border: none;
            background-color: transparent;
            font-weight: 600;
            color: ${props => props.theme.accent};
            cursor: pointer;
            margin-left: .5rem;

            &:hover,
            &:focus {
                text-decoration: underline;
            }
        }
    }
`;
