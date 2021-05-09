import React, {useContext} from 'react';
import { AuthContext } from "../Routes/auth";

//components
import SidebarComponent from '../components/Sidebar';

//data
import {Task} from '../Types'

function Home(){
    const {user} = useContext(AuthContext)
    
    return (
        <div className="home">
        <SidebarComponent>
            <h1>Home</h1>
            <div id="tasks-summary"></div>
            <div id="daily-log-summary"></div>
        </SidebarComponent>
        </div>
    );
}


export default Home;