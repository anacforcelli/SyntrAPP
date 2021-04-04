import React from 'react';
import useAuth from './auth'

import { Route as ReactRouter, Redirect, RouteProps as ReactRouteProps } from 'react-router-dom';

interface RouteProps extends ReactRouteProps{
    isPrivate?:boolean;
    component: React.ComponentType;
}

const Routes: React.FC<RouteProps> = ({isPrivate = false, component: Component, ...rest}) => {
        const user = useAuth();

        return(
            <ReactRouter {...rest}
                render={({location}) => {
                    console.log(user);
                    return(
                        isPrivate === !!user ? (
                            <Component/>
                        ):(
                            <Redirect to={{pathname:isPrivate ? '/' : '/',
                            state: {from : location} }}/>
                    )
                )}}
            />
        );
}

export default Routes;