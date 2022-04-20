import React from "react";
import style from "./style.module.css";

const CustomButton = ({ onClick, icon, text }) => {
    return (
        <div className={style.btn} onClick={onClick}>
            {icon ? <span>{icon}</span> : null}
            <p>{text}</p>
        </div>
    );
};

export default CustomButton;
