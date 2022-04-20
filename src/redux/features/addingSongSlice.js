import { createSlice } from "@reduxjs/toolkit"; // import slice from redux toolkit

const initialValue = 0;

export const addingSongSlice = createSlice({
    name: "addingSong",
    initialState: { addingSong: initialValue },
    reducers: {
        setAddStatus: (state, action) => {
            state.addingSong = action.payload.addingSong;
        },
    },
});

export const { setAddStatus } = addingSongSlice.actions;
export default addingSongSlice.reducer;
