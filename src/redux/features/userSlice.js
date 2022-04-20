import { createSlice } from "@reduxjs/toolkit"; // import slice from redux toolkit

const initialValue = {
    id: "",
    name: "",
    image: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState: { userData: initialValue },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload.userData;
        },
    },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
