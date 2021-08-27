import styled from "styled-components";

export const Input = styled.input`
    display: block;
    margin-bottom: 1rem;
    width: 100%;
    outline: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 1px solid gray;
    border-radius: 4px;
    transition: border-color 0.3s ease-out;

    &:focus {
        border-color: ${(props) => props.theme.accent};
    }
`;
