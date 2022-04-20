import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRouter = ({ authStatus, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (authStatus === "loggedIn") {
                    return <Component {...props} />;
                }
                if (authStatus !== "loggedIn") {
                    return (
                        <Redirect
                            to={{
                                path: "/login",
                                state: { from: props.location },
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default ProtectedRouter;
