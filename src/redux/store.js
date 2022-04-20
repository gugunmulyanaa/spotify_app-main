import { configureStore } from "@reduxjs/toolkit"; //  import store configuration
import accessTokenSlice from "./features/accessTokenSlice";
import authenticationSlice from "./features/authenticationSlice"; // import slice that we need
import tracksSlice from "./features/tracksSlice";
import userSlice from "./features/userSlice";
import tokenExpireSlice from "./features/tokenExpireSlice";
import currentPlaylistSlice from "./features/currentPlaylistSlice";
import addingSongSlice from "./features/addingSongSlice";

const store = configureStore({
    // here we define our reducer
    reducer: {
        // here is user reducer that inside userSlice that we call "user", after we define it here, it can be use globally
        auth: authenticationSlice,
        accessToken: accessTokenSlice,
        tracksList: tracksSlice,
        user: userSlice,
        expireIn: tokenExpireSlice,
        currentPlaylist: currentPlaylistSlice,
        addingSong: addingSongSlice,
    },
});

export default store;
