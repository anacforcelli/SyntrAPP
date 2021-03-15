import React from 'react';
import { Link } from 'react-router-dom';

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
      </SidebarComponent>
    </div>
  );
}


export default Home; 