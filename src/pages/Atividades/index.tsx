import React from 'react';
import { Link } from 'react-router-dom';
import OverlayTrigger from "../../components/OverlayTrigger";
import SidebarComponent from '../../components/Sidebar';


function Atividades(){
  return (
    <div className="home">
      <SidebarComponent 
      sidebarContent={
        <div>
          <Link to="/calendar">calendario</Link>
          <Link to="/">home</Link>
        </div>
      }>
        <h1>atividades</h1>
      </SidebarComponent>
    </div>
  );
}


export default Atividades; 