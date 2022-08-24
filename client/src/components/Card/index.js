import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Card = (props) => {

    const [user, setUser] = useState([]);
    const [userLoaded, setUserLoaded] = useState(false);

    const fetchUser = async() => {
        try {
            let response = await fetch('https://randomuser.me/api');
            let json = await response.json();
            return { success: true, data: json};
        } catch (error) {
            console.log(error);
            return { success: false };
        }
    }

    useEffect(() => {
        (async() => {
            setUserLoaded(false);
            let res = await fetchUser();
            if (res.success){
                setUser(res.data.results[0]);
                setUserLoaded(true);
            }
        })();
    }, []);


    return(
        <div className = "card">
            <div className="auth_form_">
                <img src={props.img} className="cardImg"/>
                <p className="userNameAge"> {props.name}, {props.age}</p>
                <p className="userDesc"> {props.desc}</p>
            </div>
            <div className="matchButtons">
               <button>Ignore</button>
               <button>Add Friend</button>
            </div>
        </div>
    )
}

export default Card;