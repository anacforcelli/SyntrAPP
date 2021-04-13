import React from "react";
import OverlayTrigger , {OverlayState} from "../components/OverlayTrigger";

interface ILoginSignupModalState extends OverlayState {
    lifecycle : 'login' | 'signup' | 'acc-recovery',
    loginError : boolean,
}

class LoginSignupModal extends OverlayTrigger {
    state: ILoginSignupModalState = {
        lifecycle : 'login',
        showModal : false,
        loginError : false,
    };

    render() {
        return (
            <div></div>
        );
    }
}

export default LoginSignupModal;