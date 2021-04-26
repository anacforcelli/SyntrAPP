import React from 'react'
import useAuth from './auth'

import { Route as ReactRouter, Redirect, RouteProps as ReactRouteProps } from 'react-router-dom';

interface RouteProps extends ReactRouteProps {
    isPrivate? : boolean;
    component  : React.ComponentType;
}

const PrivateRoute : React.FC<RouteProps> = ({isPrivate = false, component: Component, ...rest}) => {
    const user = useAuth();
    var isAuthed : boolean = true

    return(
        <ReactRouter {...rest}
            render={({location}) => {
                return(
                    isPrivate === isAuthed ? 
                        ( <Component/>)
                        :
                        (<Redirect to={{pathname:isPrivate ? '/' : '/',
                        state: {from : location} }}/>)
                )
            }
        }/>
    );
}

export default PrivateRoute;