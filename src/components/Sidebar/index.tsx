import React from "react";
import Sidebar from 'react-sidebar';

type State = { sidebarDocked:boolean, sidebarOpen:boolean };
type Props = { sidebarContent : any }

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
            sidebar={this.props.sidebarContent}
            open={this.state.sidebarOpen}
            docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}>
                {this.props.children}
            </Sidebar>
        )
    }
}

export default SidebarComponent;
