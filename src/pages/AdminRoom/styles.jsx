import styled from "styled-components";

export const AdminPage = styled.div`
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

                > footer { 
                    display: flex;
                    align-items: center;
                    flex-direction: row-reverse;
                    gap: 1rem;
                    margin-top: 1rem;

                    > button {
                        outline: none;
                        border: none;
                        color: ${props => props.theme.accent};
                        background-color: transparent;
                        cursor: pointer;

                        svg {
                            font-size: 1.25rem;
                            pointer-events: none;
                        }
                    }
                }   
            }
        }
    }
`;