import React from "react";
import { useDispatch } from "react-redux"; // use dispatch is like the setState
import { login, logout } from "../redux/features/userSlice";

const LoginTemp = () => {
    const user = useDispatch();
    return (
        <div>
            <button
                onClick={() => {
                    user(
                        login({ name: "agil", age: 9, email: "agil@gmail.com" })
                    );
                }}
            >
                Login
            </button>
            <button
                onClick={() => {
                    user(logout());
                }}
            >
                logout
            </button>
        </div>
    );
};

export default LoginTemp;
