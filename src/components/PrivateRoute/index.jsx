import React from "react";
import { Route, Redirect } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export default function PrivateRoute({ component: Component, ...rest }) {
    const { isAuthenticated } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) => {
                if(isAuthenticated){
                    return <Component {...props} />;
                } else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }}
        />
    );
}
