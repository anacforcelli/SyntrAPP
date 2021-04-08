
import React, { useState, useEffect } from 'react'
import SidebarComponent from '../../components/Sidebar';
import CalendarCard from  '../../components/CalendarCard/CalendarCard'


function Calendario() {

  const [filter, setFilter]   = useState('SAF')
  const [cards, setCards] = useState('')

  useEffect(() => {
    switch (filter) {
      case 'SAF':
        setCards(
          'SAF'
        )
        console.log('SAF')
        break;
      case 'Date':
        setCards(
          'Date'
        )
        console.log('date')
        break;    

      default:
        break;
    }
    return () => {}
  }, [filter]);

  return (
    <div className="calendar">
      <SidebarComponent>
        <h1>Calendário</h1>
        <div className="filter-buttons">
          <button id="set-filter-saf" onClick={()=>setFilter('SAF')}>Filtro SAF</button>
          <button id="set-filter-date" onClick={()=>setFilter('Date')}>Filtro Data</button>
        </div>
        <div className="cards-display">
          Display cards
        </div>
      </SidebarComponent>
    </div>
  );
}


export default Calendario; 