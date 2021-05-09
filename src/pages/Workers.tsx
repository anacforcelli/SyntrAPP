import React, {useContext} from 'react'
import { AuthContext } from "../Routes/auth";
import api from '../Services/api'

//components
import SidebarComponent from '../components/Sidebar'
import OverlayTrigger from '../components/OverlayTrigger'
import Card from '../components/Card'

//types
import {Worker} from '../Types'

export default function Workers() {
    const {user} = useContext(AuthContext)
    let workers : Array<Worker>
    api.get('/Users/'+user.id+'/Workers').then(
        (response)=>{
            workers = response.data    
        }
    )
    return (
        <SidebarComponent>
            <div id="workers-search"></div>
            <div id="view-workers">
                {
                    workers.map((worker)=>{
                        return(
                        <Card title = {worker.name} className='worker-card'>
                            <img src={worker.photo} alt={worker.name + '-photo'}/>
                            {worker.CPF}
                            <br/>
                            {worker.number_phone}
                        </Card>)
                    })
                }
            </div>
            <OverlayTrigger title='Adicionar Funcionário' triggerComponent={<button title='Adicionar Funcionário'>Adicionar Funcionário</button>}>

            </OverlayTrigger>
        </SidebarComponent>
    )
}
