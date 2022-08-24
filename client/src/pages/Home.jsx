import React, { useEffect, useState } from 'react';
import { Nav } from "../components/Nav/index.js";
// import Auth from '../utils/auth';
// import Card from '../components/Card/index';

import { useQuery } from '@apollo/client';
//import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';



export const Home = (props) => {

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

    function refreshPage(){
        window.location.reload();
    }

    return(
       <div className = "gradient">
         <Nav></Nav>
        {userLoaded ? (
             <div className = "wrapperCard">
                 <div className = "card">
                    <div className="auth_form_">
                        <img src={user.picture.large} className="cardImg"/>
                        <p className="userNameAge"> {user.name.first}, {user.dob.age}</p>
                        <p className="userDesc"> Hi I'm {user.name.first} from {user.location.city}, {user.location.country}!</p>
                    </div>
                    <div className="matchButtons">
                        <button type = "button" onClick={refreshPage}>Ignore</button>
                        <button type = "button" onClick={refreshPage}>Add Friend</button>
                    </div>
                </div>
            </div>
        ) : (
            <p>No User found, please try again</p>
        )}
       </div>
    );
}

// export default Home;





// export const Home = () => {

//     //const { data: userData } = useQuery(QUERY_ME_BASIC);
//     //const loggedIn = Auth.loggedIn();

//     return (
//         <div className="gradient">
//             <Nav></Nav>
//             <div className="wrapperCard">
//                 <Card 
//                 img="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//                 name="Victoria"
//                 age="24"
//                 desc="Hi! Looking to make great connections"
//                 />


//             </div>
           
//         </div>
//     )
// }

