import React from 'react';
import match from "../../assets/heart.png"
import decline from "../../assets/cancel.png"
import { Link } from 'react-router-dom';


const Card = (props) => {
    return(
        <div className = "card">
            <div className="auth_form_">
                <img src={props.img} className="cardImg"/>
                <p className="userNameAge"> {props.name}, {props.age}</p>
                <h4 className ="userHobby"> {props.hobby}</h4>
                <p className="userDesc"> {props.desc}</p>
            </div>
            <div className="matchButtons">
                <img src={decline} ></img>
                <img src={match} ></img>
            </div>
        </div>
    )
}

export default Card;