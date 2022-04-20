import React from "react";
import style from "./style.module.css";
import { defaultImage } from "../../assets";

type Card = {
    image: string;
    title: string;
    description?: string;
    goDetail: (id: string) => {};
    id: string;
};
const CustomCard: React.FunctionComponent<Card> = ({
    image,
    title,
    description,
    goDetail,
    id,
}) => {
    return (
        <div className={style.cardContainer} onClick={() => goDetail(id)}>
            <div className={style.imageSection}>
                <img
                    src={image ? image : defaultImage}
                    alt={`${title} cover`}
                    className={style.playlistCover}
                />
            </div>
            <div className={style.titleSection}>
                <h3 className={style.playlistTitle}>
                    {title.length >= 10 ? `${title.slice(0, 10)}...` : title}
                </h3>
                {description ? (
                    <p className={style.playlistDescription}>
                        {description.length >= 10
                            ? `${description.slice(0, 20)}...`
                            : description}
                    </p>
                ) : null}
            </div>
        </div>
    );
};

export default CustomCard;
