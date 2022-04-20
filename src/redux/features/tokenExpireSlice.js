import { createSlice } from "@reduxjs/toolkit"; // import slice from redux toolkit

const initialValue = localStorage.getItem("expireIn"); // here is initial value

export const tokenExpireIn = createSlice({
    name: "expireIn", // name of our slicer is equal to the name of our state
    initialState: { expireIn: initialValue }, //the initial value
    reducers: {
        //here where we create our reducer
        setExpireIn: (state, action) => {
            // login is the name our reducer, it contains 2 params, state that contains state value itself, action that contain payload and type that define action to change value, and it equal with setState
            state.expireIn = action.payload.expireIn;
        },
    },
});

export const { setExpireIn } = tokenExpireIn.actions; //export all reducer so we can call it with the reducer name specifically
export default tokenExpireIn.reducer; // export reducer
