import styled from "styled-components";

export const LoginPage = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: stretch;
    min-height: 100vh;

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
        }
    }
`