import styled from "styled-components";

export const HeroBox = styled.div`
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
`