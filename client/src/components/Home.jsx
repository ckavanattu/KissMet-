import React from 'react';
import { Nav } from "./Nav/index";
import Auth from '../utils/auth';
import match from "../assets/heart.png"
import decline from "../assets/cancel.png"

export const Home = () => {

    const loggedIn = Auth.loggedIn();

    return (
        <div className="gradient">
            <Nav></Nav>
            <div className="wrapperCard">
                <Card 
                img="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                nameAge="Victoria, 24"
                hobby="Sewing, Horror Movies"
                desc="Hi! Looking to make great connections"
                />
            </div>
           
        </div>
    )
}

function Card(props){
    return(
        <div className = "card">
            <div className="auth_form_">
                <img src={props.img} className="cardImg"/>
                <h2 className="userNameAge"> {props.nameAge}</h2>
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