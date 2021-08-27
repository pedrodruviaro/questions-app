import styled from "styled-components";

export const HomePage = styled.div`
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