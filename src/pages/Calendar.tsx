import React, { useState, useEffect, useContext } from 'react'

//components
import SidebarComponent from '../components/Sidebar'
import CalendarCard     from  '../components/CalendarCard'

//data
import api              from  '../Services/api'
import { AuthContext }  from "../Routes/auth";
import { Task }         from '../Types';

function Calendar() {

    const [ filter, setFilter ] = useState('SAF')
    const { user } = useContext(AuthContext)
    
    let tasks : Array<Task> = []
    api.get('/Users/'+user.id+'/Farms/1/Space/1/SAF_spaces/1/Plants_allocated/1/Tasks').then( //this will prbably stay like this until we work with the true api, unless we really want a thousand mfking nested calls
        (response)=>{
            tasks = response.data;
            console.log(tasks)
        }
    )

    useEffect(() => {
        switch (filter) {
            case 'SAF':
                console.log('SAF')
                break;
            case 'Date':
                console.log('date')
                break;
            case 'Worker':
                console.log('worker')
                break;
            default:
                break;
            }
        return () => {}
    }, []);

    return (
        <SidebarComponent>
            <h1>Calendário</h1>
            <div className="filter-buttons">
                <button id="set-filter-saf"    onClick={()=>setFilter('SAF')}>    Filtro SAF</button>
                <button id="set-filter-date"   onClick={()=>setFilter('Date')}>   Filtro Data</button>
                <button id="set-filter-worker" onClick={()=>setFilter('Worker')}> Filtro Pessoa</button>
            </div>
            <div className="cards-display">
                {}
            </div>
        </SidebarComponent>
    );
}


export default Calendar;