import React from "react";
import { Link } from "react-router-dom";
import LoginSignupModal from '../../components/LoginSignupModal'

export type ILandingProps = {}

export interface ILandingState {
}

class Landing extends React.Component<ILandingProps, ILandingState> {
    state: ILandingState = {
    };

    render() {
        return (
           <div id='main-buttons-container'>
               
           </div>
        );
    }
}

export default Landing;