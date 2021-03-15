import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Atividades from './pages/Atividades';
import Calendario from './pages/Calendario';
import Home from './pages/Home';


function Routes() {
    return(
        <BrowserRouter>
            <Route path='/' exact component={Home}/>
            <Route path='/activities' component={Atividades}/>
            <Route path='/calendar' component={Calendario}/>
        </BrowserRouter>
    );
}

export default Routes;