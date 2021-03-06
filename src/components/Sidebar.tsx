import React from "react";
import Sidebar from 'react-sidebar';
import { Link } from "react-router-dom";
import "./styles/sidebar.css"

interface State { sidebarDocked:boolean, sidebarOpen:boolean };
interface Props {}

class SidebarComponent extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);
        this.state = {
          sidebarOpen: false,
          sidebarDocked: true
        };    
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
  
    onSetSidebarOpen() {
      this.setState({ sidebarOpen: true });
    }
    
    render() {
        return (
            <Sidebar
            sidebar={
                <div id='sidebar-links'>
                    <Link to="/calendar">   <i className="arrow right"/> calendario </Link>
                    <Link to="/home">       <i className="arrow right"/> home       </Link>
                    <Link to="/tasks">      <i className="arrow right"/> atividades </Link>
                    <Link to="/prevision">  <i className="arrow right"/> previsoes  </Link>
                    <Link to="/profile">    <i className="arrow right"/> perfil     </Link>
                </div>}
            open={this.state.sidebarOpen}
            docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}
            contentId='content-container'
            sidebarId='sidebar-container'>
                {this.props.children}
            </Sidebar>
        )
    }
}

export default SidebarComponent;
