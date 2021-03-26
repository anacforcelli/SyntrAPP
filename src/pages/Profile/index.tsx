import React, {Component} from "react";
import axios from 'axios';

interface Props {}

interface State {
    ServerResponse : any,
}

class Profile extends Component <Props, State>{
	constructor(props : Props) {
		super(props)

		this.state = {
            ServerResponse : '',
		}
	}
    componentDidMount() {
        axios.get('https://604a73889251e100177ceb12.mockapi.io/syntrapp/API/Users')
        .then(response => {
            console.log(response) //REMOVE ON PRODUCTION!
            this.setState({ ServerResponse: response.data })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
            List of posts
            {
                this.state.ServerResponse
            }
            </div>
        );
    }
}

export default Profile;