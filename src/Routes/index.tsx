import React from 'react';
import {Switch} from 'react-router-dom';
import RouteOverload from "./routes";

import Login         from '.././pages/Login';
import SignUp_Passo1 from '.././pages/SignUp_Passo1';
import SignUp_Passo2 from '.././pages/SignUp_Passo2';

import Profile       from '.././pages/Profile';
import Atividades    from '.././pages/Atividades';
import Calendario    from '.././pages/Calendario';
import Home          from '.././pages/Home';
import Prevision     from '.././pages/Prevision';

import Redirection   from './redirect';

function Routes(){
    return(
            <Switch>                
                <RouteOverload path='/'      exact component={Home}/>
                <RouteOverload path='/login' exact component={Login} />
                <RouteOverload path='/signup1'     component={SignUp_Passo1} />
                <RouteOverload path='/signup2'     component={SignUp_Passo2} />

                <RouteOverload path='/feed'       component={Profile}    isPrivate/>
                <RouteOverload path='/activities' component={Atividades} isPrivate/>
                <RouteOverload path='/calendar'   component={Calendario} isPrivate/>
                <RouteOverload path='/prevision'  component={Prevision}  isPrivate/>
                
                <RouteOverload component={Redirection} />
            </Switch>
    );
}
export default Routes;