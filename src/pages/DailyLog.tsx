import React, {useState} from 'react'

//components
import SidebarComponent from '../components/Sidebar'
import Card from '../components/Card'

//data

export default function DailyLog() {
    const [activeUser, setActiveUser] = useState<string>('');
    return (
        <SidebarComponent>
            <h1>Log do Dia</h1>
            <div id="log-display">
                <div id="conversations-tab">
                    1 <br/> 2 <br/> 3
                </div>
                <div id="chat-screen">
                    <h1>{activeUser}</h1>
                    msg cards
                </div>
            </div>
        </SidebarComponent>
    )
}
