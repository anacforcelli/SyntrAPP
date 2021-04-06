import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login         from '.././pages/Login';
import SignUp_Passo1 from '.././pages/SignUp_Passo1';
import SignUp_Passo2 from '.././pages/SignUp_Passo2';

import Profile       from '.././pages/Profile';
import Atividades    from '.././pages/Atividades';
import Calendario    from '.././pages/Calendario';
import Home          from '.././pages/Home';
import Prevision     from '.././pages/Prevision';

import Redirection   from './redirect';
import PrivateRoute from './routes'

function MainRoutes2s(){
    return(
            <Switch>                
                <Route path='/'      exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/signup1'     component={SignUp_Passo1} />
                <Route path='/signup2'     component={SignUp_Passo2} />

                <PrivateRoute path='/profile'    component={Profile}    isPrivate/>
                <PrivateRoute path='/activities' component={Atividades} isPrivate/>
                <PrivateRoute path='/calendar'   component={Calendario} isPrivate/>
                <PrivateRoute path='/prevision'  component={Prevision}  isPrivate/>
                
                <Route component={Redirection} />
            </Switch>
    );
}
export default MainRoutes2s;