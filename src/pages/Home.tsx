import React from 'react';
import OverlayTrigger from "../components/OverlayTrigger";
import SidebarComponent from '../components/Sidebar';


function Home(){
  return (
    <div className="home">
      <SidebarComponent>
        <h1>homepageContent</h1>
        <OverlayTrigger 
         triggerComponent={<button>modalbutton</button>}
         title='modal title'>
          <h1>modalcontent</h1>
        </OverlayTrigger>
      </SidebarComponent>
    </div>
  );
}


export default Home; 