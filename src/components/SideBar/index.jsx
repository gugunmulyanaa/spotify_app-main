import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.css";
import { BiHomeAlt, BiSearch, BiCollection } from "react-icons/bi";
//import { logo } from "../../assets";
//import { colors } from "../../utils/colorUtils";

const SideBar = () => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname.replace("/", ""));
    return (
        <div className={style.sideBarContainer}>
            <div className={style.aplicationIcon}>
                {/* <img src={logo} alt="" className={style.logoIcon} /> */}
                <p>
                    PLAYLIST <span>&trade;</span>
                </p>
            </div>
            {location.pathname === "/login" ? null : (
                <ul className={style.menuList}>
                    <p className={style.menuHeader}>MENU</p>
                    <li onClick={() => setActive("home")}>
                        <Link
                            to="/home"
                            style={{
                                color: "inherit",
                                textDecoration: "inherit",
                            }}
                        >
                            <div
                                className={
                                    active === "home"
                                        ? style.menuItemsCollectionActive
                                        : style.menuItemsCollection
                                }
                            >
                                <BiHomeAlt />
                                <p>Home</p>
                            </div>
                        </Link>
                    </li>
                    <li onClick={() => setActive("browse")}>
                        <Link
                            to="/browse"
                            style={{
                                color: "inherit",
                                textDecoration: "inherit",
                            }}
                        >
                            <div
                                className={
                                    active === "browse"
                                        ? style.menuItemsCollectionActive
                                        : style.menuItemsCollection
                                }
                            >
                                <BiSearch />
                                <p>Browse</p>
                            </div>
                        </Link>
                    </li>
                    <li onClick={() => setActive("collection")}>
                        <Link
                            to="/collection"
                            style={{
                                color: "inherit",
                                textDecoration: "inherit",
                            }}
                        >
                            <div
                                className={
                                    active === "collection"
                                        ? style.menuItemsCollectionActive
                                        : style.menuItemsCollection
                                }
                            >
                                <BiCollection />
                                <p>Collection</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default SideBar;
