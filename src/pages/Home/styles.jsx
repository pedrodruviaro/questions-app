import styled from "styled-components";

export const HomePage = styled.div`
        display:flex;
    justify-content: space-between;
    align-items: stretch;
    min-height: 100vh;

    @media (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        min-height: auto;
        gap: 3rem;
        padding: 3rem 0;

    }

    .right {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 8;

        @media (max-width: 768px){ 
            text-align: center;
        }

        > div {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            p {
                font-size: 1.125rem;

                a {
                    color: ${props => props.theme.accent};
                    font-weight: 600;

                    &:hover,
                    &:active {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`