import React from "react";
import { SearchBar } from "../../components";
import style from "./style.module.css";

const Browse = () => {
    return (
        <div className={style.browseContainer}>
            <h1>Browse</h1>
            <SearchBar />
        </div>
    );
};

export default Browse;
