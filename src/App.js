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
import AboutUs from "./pages/AboutUs/index";
import Contact from "./pages/Contact/index";
import ReportBug from "./pages/ReportBug/index";
import Page404 from "./pages/Page404/index";

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

                        <Route path="/about-us" component={AboutUs} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/report-bug" component={ReportBug} />
                        <Route path="*" component={Page404} />

                    </Switch>
                </BrowserRouter>
            </AuthContextProvider>
        </ThemeProvider>
    );
}

export default App;
