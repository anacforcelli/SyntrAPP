import React from "react";
import Sidebar from 'react-sidebar';
import { Link } from "react-router-dom";
import "./styles.css"

type State = { sidebarDocked:boolean, sidebarOpen:boolean };
type Props = {}

class SidebarComponent extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);
        this.state = {
          sidebarOpen: false,
          sidebarDocked: true
        };    
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
  
    onSetSidebarOpen(open : any) {
      this.setState({ sidebarOpen: open });
    }
    
    render() {
        return (
            <Sidebar
            sidebar={
                <div id='sidebar-links'>
                <Link to="/calendar">calendario</Link>
                <Link to="/">home</Link>
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
