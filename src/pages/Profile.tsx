import React, {useContext} from "react";

import SidebarComponent from '../components/Sidebar';
import { AuthContext } from "../Routes/auth";

function Profile () {
    const {user} = useContext(AuthContext)
    return (
        <SidebarComponent>
                {JSON.stringify(user)}
        </SidebarComponent>          
    );    
}

export default Profile;