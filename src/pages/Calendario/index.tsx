import React from 'react';
import { Link } from 'react-router-dom';

import SidebarComponent from '../../components/Sidebar';


function Calendario(){
  return (
    <div className="home">
      <SidebarComponent 
      sidebarContent={
        <div>
        <Link to="/activities">atividades</Link>
        <Link to="/">home</Link>
        </div>
      }>
        <h1>calendario</h1>
      </SidebarComponent>
    </div>
  );
}


export default Calendario; 