import { createSlice } from "@reduxjs/toolkit"; // import slice from redux toolkit

const initialValue = localStorage.getItem("accessToken"); // here is initial value

export const accessTokenSlice = createSlice({
    name: "accessToken", // name of our slicer is equal to the name of our state
    initialState: { accessToken: initialValue }, //the initial value
    reducers: {
        //here where we create our reducer
        setToken: (state, action) => {
            // login is the name our reducer, it contains 2 params, state that contains state value itself, action that contain payload and type that define action to change value, and it equal with setState
            state.accessToken = action.payload.accessToken;
        },
    },
});

export const { setToken } = accessTokenSlice.actions; //export all reducer so we can call it with the reducer name specifically
export default accessTokenSlice.reducer; // export reducer
