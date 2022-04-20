import { createSlice } from "@reduxjs/toolkit"; // import slice from redux toolkit

const initialValue = localStorage.getItem("authStatus"); // here is initial value

export const authenticationSlice = createSlice({
    name: "login", // name of our slicer is equal to the name of our state
    initialState: { loginStatus: initialValue }, //the initial value
    reducers: {
        //here where we create our reducer
        login: (state, action) => {
            // login is the name our reducer, it contains 2 params, state that contains state value itself, action that contain payload and type that define action to change value, and it equal with setState
            state.loginStatus = action.payload.loginStatus;
        },
        logout: (state) => {
            state.loginStatus = null;
        },
    },
});

export const { login, logout } = authenticationSlice.actions; //export all reducer so we can call it with the reducer name specifically
export default authenticationSlice.reducer; // export reducer
