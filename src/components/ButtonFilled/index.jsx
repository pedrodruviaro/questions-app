import styled from "styled-components";

export const ButtonFilled = styled.button`
    outline: none;
    background-color: ${props => props.theme.accent};
    color: #fff;
    font-size: 1rem;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25em 0.75em;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 auto;
    transition: all 0.3s ease-in-out;
    

    &:hover,
    &:focus {
        filter: brightness(0.8);
    }
`;
