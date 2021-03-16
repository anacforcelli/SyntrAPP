import React from 'react';
import { Link } from 'react-router-dom';
import OverlayTrigger from "../../components/OverlayTrigger";
import SidebarComponent from '../../components/Sidebar';


function Home(){
  return (
    <div className="home">
      <SidebarComponent 
      sidebarContent={
        <div>
          <Link to="/calendar">calendario</Link>
          <Link to="/activities">atividades</Link>
        </div>
      }>
        <h1>homepage</h1>
        <OverlayTrigger buttonTitle='modal' title='modal title'>
          <h1>modalcontent</h1>
        </OverlayTrigger>
      </SidebarComponent>
    </div>
  );
}


export default Home; 