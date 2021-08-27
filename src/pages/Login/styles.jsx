import styled from "styled-components";

export const LoginPage = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: stretch;
    min-height: 100vh;

    .left {
        flex: 6;
        background-color: #fdfdfd;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6rem;
        padding: 1.5rem;

        border-right: 2px solid ${props => props.theme.accent};;

        > div {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        h1 {
            font-weight: 300;
            text-transform: uppercase;
            font-size: 2.25rem;
        }

        img {
            width: 85%;
            max-width: 500px;
        }

        p {
            font-weight: 600;
            font-size: 1.25rem;
        }

        span {
            font-size: .8rem;
            opacity: .9;
        }
    }

    .right {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 8;
        
        div {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: center;

            padding: 4rem;
            border-radius: 4px;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

            h2 {
                font-size: 2rem;
                font-weight: 400;
                text-align: center;
                line-height: 1.1;
            }

            > button {
                border: 1px solid ${props => props.theme.accent};
                outline: none;
                background-color: transparent;
                font-size: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                text-align: center;
                gap: .5rem;
                padding: .5rem 1rem;
                font-weight: 600;
                border-radius: 4px;
                cursor: pointer;
                transition: all .3s ease-in-out;
                width: 100%;

                &:hover,
                &:focus {
                    transform: scale(1.1);
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
                }

                svg {
                    font-size: 1.5rem;
                }
            }

            p {
                color: gray;
                font-size: .9rem;

                &::after {
                    content: "";
                    display: block;
                    background-color: gray;
                    opacity: .8;
                    margin: .25rem auto 0 auto;
                    width: 30%;
                    height: 1px;
                }
            }
        }

        form {
            width: 100%;
            
            input {
                display: block;
                margin-bottom: 1rem;
                width: 100%;
                outline: none;
                padding: .5rem 1rem;
                font-size: 1rem;
                border: 1px solid gray;
                border-radius: 4px;
                transition: border-color .3s ease-out;

                &:focus {
                    border-color: ${props => props.theme.accent};
                }
            }

            > button {
                outline: none;
                background-color: ${props => props.theme.accent};
                color: #fdfdfd;
                border: none;
                font-size: 1rem;
                display: flex;
                align-items: center;
                gap: .5rem;
                padding: .25em .75em;
                border-radius: 4px;
                cursor: pointer;
                margin: 0 auto;
                transition: all .3s ease-in-out;

                &:hover,
                &:focus {
                    filter: brightness(.8);
                }
            }
        }
    }
`