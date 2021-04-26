import React, {Component} from "react";
import axios from 'axios';


function Profile (props) {
    //const [userList, setuserList] = useState<Array<User>>();
	
    axios.get('https://604a73889251e100177ceb12.mockapi.io/syntrapp/API/Users')
    .then(response => {
        console.log(response)
        //setuserList(response.data)
    })
    .catch(error => {
        console.log(error)
    })

    return (
        <div id='profiles-list'>
        </div>                
    );    
}

export default Profile;