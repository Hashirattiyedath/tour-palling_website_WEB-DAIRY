import React, { useState } from 'react';
import heart from "../img/heart.svg";

function Card(props) {
    
    const [btnText, setBtnText] = useState("Add to favorite");
    const [classState, setClassName] = useState("");

    const addToFavorite = (images) => {
        /* access current state */
        setBtnText((prevState) => {
            if (prevState === "Add to favorite") {
                // calling an function
                props.cardFun(images);
                return "Added to favorite"
            }
            else {
                return "Add to favorite"
            }
        })

        /* access current state */
        setClassName((prevState) => {
            if (prevState == "") {
                return "active"
            }
            else {
                return "";
            }
        })


        // const cardImg = props.cardContent.imgSrc;
        // myFunctionImg(cardImg)
        // console.log(images)
    }

    return (
        <div className={`card ${classState}`}>
            <img src={heart} className="icon" alt="heart" />
            <img src={props.cardContent.imgSrc} alt="" />
            <h3>{props.cardContent.name}</h3>
            <p>Mobile: {props.cardContent.mobile}</p>
            <p>Email: {props.cardContent.email}</p>
            <button type="button" className="btn" onClick={() => { addToFavorite(props.cardContent.imgSrc) }}>{btnText}</button>
        </div>
    )
}

export default Card;
