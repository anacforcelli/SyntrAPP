import React, {Component} from "react";
import axios from 'axios';

interface Props {}

interface State {
    ServerResponse : Array<Object>,
}

class Profile extends Component <Props, State>{
	constructor(props : Props) {
		super(props)

		this.state = {
            ServerResponse : [],
		}
	}
    componentDidMount() {
        axios.get('https://604a73889251e100177ceb12.mockapi.io/syntrapp/API/Users')
        .then(response => {
            console.log(response)
            this.setState({ ServerResponse: response.data })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        var UserList : string = '';

        for (var User of this.state.ServerResponse) {
            UserList += (JSON.stringify(User))        
        }
        return (
            <div id='profiles-list' dangerouslySetInnerHTML = {{__html : UserList}}/>                
        );
    }
}

export default Profile;