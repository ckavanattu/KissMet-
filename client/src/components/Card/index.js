import React from 'react';
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
               <button>Add Friend</button>
            </div>
        </div>
    )
}

export default Card;