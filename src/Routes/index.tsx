import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login          from '../pages/Login';
import Profile        from '../pages/Profile';
import Tasks          from '../pages/Tasks';
import TaskManagement from '../pages/TaskManagement'
import Calendar       from '../pages/Calendar';
import Home           from '../pages/Home';
import Prevision      from '../pages/Prevision';

import Redirection   from './redirect';
import PrivateRoute  from './routes'

function MainRoutes2s(){
    return(
        <Switch>                
            <Route path='/'      exact component={Home} />
            <Route path='/login' exact component={Login} />

            <PrivateRoute path='/profile'    component={Profile}    isPrivate/>
            <PrivateRoute path='/tasks'      component={Tasks}      isPrivate/>
            <PrivateRoute path='/newtask'    component={TaskManagement} isPrivate/>
            <PrivateRoute path='/calendar'   component={Calendar}   isPrivate/>
            <PrivateRoute path='/prevision'  component={Prevision}  isPrivate/>
            
            <Route component={Redirection} />
        </Switch>
    );
}
export default MainRoutes2s;