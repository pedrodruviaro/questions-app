import React from "react";
import { ThemeProvider } from "styled-components";

import { primaryTheme } from "./styles/Themes";
import { ResetCSS } from "./styles/ResetCSS";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
    return (
        <ThemeProvider theme={primaryTheme}>
            <ResetCSS />
            <GlobalStyles />
            App
        </ThemeProvider>
    );
}

export default App;
