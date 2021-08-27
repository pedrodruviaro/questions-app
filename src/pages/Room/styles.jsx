import styled from "styled-components";

export const RoomPage = styled.div`
    display: grid;
    grid-template-areas: "header"
                        "main"
                        "footer"; 
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content;
    min-height: 100vh;


    /* main */
    main {
        grid-area: main;
        max-width: 1440px;
        margin: 0 auto;
        padding: 1.5rem;
    }

`