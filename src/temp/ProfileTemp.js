import React from "react";
import { useSelector } from "react-redux";

const ProfileTemp = () => {
    const userSelector = useSelector((state) => state.user.value);
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Name : {userSelector.name} </p>
            <p>Age : {userSelector.age}</p>
            <p>Email : {userSelector.email}</p>
        </div>
    );
};

export default ProfileTemp;
