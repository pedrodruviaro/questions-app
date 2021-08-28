import styled from "styled-components";

export const Footer = styled.footer`
    grid-area: footer;
    background-color: #212121;
    color: #fff;
    border-top: 2px solid ${(props) => props.theme.accent};
    padding: 2rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px){
            flex-direction: column;
            gap: 2rem;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1rem;
    }

    svg {
        font-size: 1.5rem;
    }

    a:focus,
    a:hover {
        outline-offset: 3px;
        outline: 2px solid ${(props) => props.theme.accent};
    }
`;
