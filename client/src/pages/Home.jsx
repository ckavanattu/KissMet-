import React from 'react';
import { Nav } from "../components/Nav/index.js";
import Auth from '../utils/auth';
import Card from '../components/Card/index';

import { useQuery } from '@apollo/client';
import { motion } from "framer-motion";
//import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';


const Home = () => {

    //const { data: userData } = useQuery(QUERY_ME_BASIC);
    const loggedIn = Auth.loggedIn();

    return (
        <motion.div className="gradient"
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: 0, transition: {duration: 0.4}}}>
            <Nav></Nav>
            <div className="wrapperCard">
                <Card 
                img="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                name="Victoria"
                age="24"
                hobby="Sewing, Horror Movies"
                desc="Hi! Looking to make great connections"
                />

                {/* <Card
                    img={userData.img}
                    name={userData.name}
                    age={userData.age}
                    hobby={userData.hobby}
                    desc={userData.desc}
                /> */}
            </div>
           
        </motion.div>
    )
}

export default Home;
