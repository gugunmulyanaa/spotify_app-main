import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";
import { Tracks, SearchBar } from "..";
import { miliSecondToMinutes } from "../../helper/timehelper";

import style from "./style.module.css";
import { actions } from "../../utils/actionUtils";
import { setPlaylistId } from "../../redux/features/currentPlaylistSlice";
import { defaultImage } from "../../assets";

const Playlist = () => {
    const dispatch = useDispatch();
    const [playlistItem, setPlaylistItem] = useState("");
    const [playlistDetail, setPlaylistDetail] = useState();
    const { playlistId } = useParams();

    dispatch(setPlaylistId({ playlistId }));
    const accessToken = useSelector((state) => state.accessToken.accessToken);
    const addedSongStatus = useSelector((state) => state.addingSong.addingSong);
    useEffect(() => {
        const getPlaylistDetail = () => {
            try {
                axios
                    .get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
                        headers: {
                            Authorization: "Bearer " + accessToken,
                        },
                    })
                    .then((response) => {
                        setPlaylistDetail(
                            <>
                                <img
                                    src={
                                        response.data.images.length === 0
                                            ? defaultImage
                                            : response.data.images[0].url
                                    }
                                    alt=""
                                    className={style.playlistImage}
                                />
                                <div>
                                    <h1 className={style.playlistName}>
                                        {response.data.name}
                                    </h1>
                                    <p className={style.playlistDescription}>
                                        {response.data.description}
                                    </p>
                                </div>
                            </>
                        );
                    });
            } catch (error) {
                console.log(error);
            }
        };
        const getPlaylistItem = () => {
            try {
                axios
                    .get(
                        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                        {
                            headers: {
                                Authorization: "Bearer " + accessToken,
                            },
                        }
                    )
                    .then((response) => {
                        const resultContainer = response.data.items;
                        if (resultContainer !== 0) {
                            setPlaylistItem(
                                resultContainer.map((result, index) => (
                                    <Tracks
                                        key={index}
                                        id={result.track.id}
                                        title={result.track.name}
                                        artist={result.track.artists[0].name}
                                        image={result.track.album.images[2].url}
                                        duration={miliSecondToMinutes(
                                            result.track.duration_ms
                                        )}
                                        album={result.track.album.name}
                                        index={index}
                                    />
                                ))
                            );
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        };
        getPlaylistItem();
        getPlaylistDetail();
    }, [addedSongStatus]);

    return (
        <div className={style.playlistContainer}>
            <div className={style.playlistHeader}>{playlistDetail}</div>
            <div className={style.palylistContent}>
                <div className={style.palylistContentHead}>
                    <div>
                        <p>#</p>
                        <p>JUDUL</p>
                    </div>
                    <p>ALBUM</p>
                    <p>DURASI</p>
                </div>
                {playlistItem}
            </div>
            <div className={style.searchSong}>
                <p>Ayo cari sesuatu untuk playlist-mu</p>
                <SearchBar action={actions.add} />
            </div>
        </div>
    );
};

export default Playlist;
