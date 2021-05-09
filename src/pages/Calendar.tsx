import React, { useState, useEffect } from 'react'

//components
import SidebarComponent from '../components/Sidebar'
import CalendarCard from  '../components/CalendarCard'

//data

function Calendario() {

    const [filter, setFilter]   = useState('SAF')
    const [cards, setCards] = useState<JSX.Element[]>()    

    useEffect(() => {
        switch (filter) {
            case 'SAF':
                console.log('SAF')
                break;
            case 'Date':
                console.log('date')
                break;    
            default:
                break;
            }
        return () => {}
    }, [filter]);

    return (
        <SidebarComponent>
            <h1>Calendário</h1>
            <div className="filter-buttons">
                <button id="set-filter-saf" onClick={()=>setFilter('SAF')}>Filtro SAF</button>
                <button id="set-filter-date" onClick={()=>setFilter('Date')}>Filtro Data</button>
            </div>
            <div className="cards-display">
                {cards}  
            </div>
        </SidebarComponent>
    );
}


export default Calendario; 