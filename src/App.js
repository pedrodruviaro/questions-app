import React from "react";
import { ThemeProvider } from "styled-components";

import { primaryTheme } from "./styles/Themes";
import { ResetCSS } from "./styles/ResetCSS";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContext'

import Login from "./pages/Login";
import Home from "./pages/Home";
import Room from "./pages/Room";
import PrivateRoute from './components/PrivateRoute'
import AdminRoom from "./pages/AdminRoom/index";

function App() {
    return (
        <ThemeProvider theme={primaryTheme}>
            <ResetCSS />
            <GlobalStyles />

            <AuthContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/home" component={Home} />
                        <Route path="/rooms/:id" component={Room} />

                        <PrivateRoute path="/admin/rooms/:id" component={AdminRoom} />
                    </Switch>
                </BrowserRouter>
            </AuthContextProvider>
        </ThemeProvider>
    );
}

export default App;
