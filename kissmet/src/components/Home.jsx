import React from 'react';
import { Nav } from "./Nav/index";
import Auth from '../utils/auth';

export const Home = () => {

    const loggedIn = Auth.loggedIn();

    return (
        <div className="gradient">
            <Nav></Nav>
        </div>
    )
}