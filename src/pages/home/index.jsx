import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";
import { CustomCard } from "../../custom-ui-component";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Home = () => {
    const [newRelease, setNewRelease] = useState();
    const accessToken = useSelector((state) => state.accessToken.accessToken);
    const history = useHistory();

    useEffect(() => {
        const getNewRelease = () => {
            axios
                .get(
                    "https://api.spotify.com/v1/browse/new-releases?country=ID&limit=6&offset=0",
                    {
                        headers: {
                            Authorization: "Bearer " + accessToken,
                        },
                    }
                )
                .then((response) => {
                    const results = response.data.albums.items;
                    setNewRelease(
                        results.map((data) => (
                            <CustomCard
                                key={data.id}
                                image={data.images[0].url}
                                title={data.name}
                                id={data.id}
                                goDetail={goDetailHandler}
                            />
                        ))
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getNewRelease();
    }, [accessToken]);
    const goDetailHandler = () => [history.push(`/home`)];
    return (
        <div className={style.homeContainer}>
            <h1>Selamat Sore</h1>
            <h4>Rilis Terbaru</h4>
            <div className={style.newRelease}>{newRelease}</div>
        </div>
    );
};

export default Home;
