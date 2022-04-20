import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { Login, Home, Browse, Collection } from "../pages";
import { Navbar, SideBar, Playlist } from "../components";
import ProtectedRouter from "./ProtectedRouter";
import { useSelector } from "react-redux";

const MyRouter = () => {
    const loginStatus = useSelector((state) => state.auth.loginStatus);

    return (
        <Router>
            {loginStatus ? <Navbar /> : null}
            {loginStatus ? <SideBar /> : null}
            <Switch>
                {/* <Route path="/" component={Home} exact /> */}
                <Route
                    path="/login"
                    component={() => <Login authStatus={loginStatus} />}
                    exact
                />
                {/* <Route path="/playlist" component={()=><Playlist id/>} exact /> */}

                {/* {loginStatus === "loggedIn" ? (
                    <Redirect to={{ pathname: "/home" }} />
                ) : (
                    <Redirect to={{ pathname: "/login" }} />
                )} */}
                <ProtectedRouter
                    path="/home"
                    component={Home}
                    authStatus={loginStatus}
                    exact
                />

                <ProtectedRouter
                    path="/collection"
                    component={Collection}
                    authStatus={loginStatus}
                    exact
                />
                <ProtectedRouter
                    path="/browse"
                    component={Browse}
                    authStatus={loginStatus}
                    exact
                />
                <ProtectedRouter
                    path="/playlist/:playlistId"
                    component={Playlist}
                    authStatus={loginStatus}
                    exact
                />
                <Route
                    exact
                    path="/"
                    render={() => {
                        return loginStatus !== null ? (
                            <Redirect to="/home" />
                        ) : (
                            <Redirect to="/login" />
                        );
                    }}
                />
            </Switch>
        </Router>
    );
};

export default MyRouter;

// {loginStatus === "loggedIn" ? (
//     <ProtectedRouter
//         path="/"
//         component={Home}
//         authStatus={loginStatus}
//         exact
//     />
// ) : (
//     <Redirect to="/login" />
// )}
// {accessToken !== null ? (
//     <Redirect to="/" />
// ) : (
//     <Redirect to="/login" />
// )}
