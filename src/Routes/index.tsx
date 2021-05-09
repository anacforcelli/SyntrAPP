import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login          from '../pages/Login';
import Landing        from '../pages/Landing'

import Profile        from '../pages/Profile';
import Tasks          from '../pages/Tasks';
import TaskManagement from '../pages/TaskManagement'
import Calendar       from '../pages/Calendar';
import Home           from '../pages/Home';
import Stats          from '../pages/Stats';

import Redirection   from './redirect';
import PrivateRoute  from './routes'
import Workers from '../pages/Workers';

function MainRoutes2s(){
    return(
        <Switch>                
            <Route path='/'      exact component={Landing} />
            <Route path='/login' exact component={Login} />

            <PrivateRoute path='/home'       component={Home}       isPrivate/>
            <PrivateRoute path='/profile'    component={Profile}    isPrivate/>
            <PrivateRoute path='/tasks'      component={Tasks}      isPrivate/>
            <PrivateRoute path='/newtask'    component={TaskManagement} isPrivate/>
            <PrivateRoute path='/calendar'   component={Calendar}   isPrivate/>
            <PrivateRoute path='/stats'      component={Stats}      isPrivate/>
            <PrivateRoute path='/workers'    component={Workers}    isPrivate/>
            
            <Route component={Redirection} />
        </Switch>
    );
}
export default MainRoutes2s;