import { createSlice } from "@reduxjs/toolkit"; // import slice from redux toolkit

const initialValue = {
    id: "",
    cover: [],
    title: "",
    albums: "",
    plays: "",
    duration: "",
};

export const tracksSlice = createSlice({
    name: "tracksList",
    initialState: { tracksList: initialValue },
    reducers: {
        setTracks: (state, action) => {
            state.tracksList = action.payload.tracksList;
        },
    },
});

export const { setTracks } = tracksSlice.actions;
export default tracksSlice.reducer;
