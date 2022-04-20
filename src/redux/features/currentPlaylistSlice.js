import { createSlice } from "@reduxjs/toolkit"; // import slice from redux toolkit

const initialValue = "";

export const currentPlaylist = createSlice({
    name: "currentPlaylist",
    initialState: { playlistId: initialValue },
    reducers: {
        setPlaylistId: (state, action) => {
            state.playlistId = action.payload.playlistId;
        },
    },
});

export const { setPlaylistId } = currentPlaylist.actions;
export default currentPlaylist.reducer;
