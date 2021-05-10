import React, {useContext, useState, useEffect, FormEvent} from 'react'
import { AuthContext } from "../Routes/auth";
import api from '../Services/api'

//components
import SidebarComponent from '../components/Sidebar'
import OverlayTrigger from '../components/OverlayTrigger'
import Card from '../components/Card'
import Input from '../components/Input'

//types
import {Worker} from '../Types'


export default function Workers() {
    const {user} = useContext(AuthContext)
    const [workers, setWorkers] = useState<Array<Worker>>([])
    let name : string, 
        photo : string,
        password : string,
        email : string,
        cpf : number,
        phone : number
    
    function submitWorker (e : FormEvent){
        e.preventDefault()
        api.post('Users/'+user.id+'Workers', {
            name        : name, 
            photo       : photo,
            password    : password,
            email       : email,
            cpf         : cpf,
            phone       : phone,
            state       : true,
            UserId      : user.id,
            createdAt   : Date.now()
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    useEffect(() => {        
        api.get('/Users/'+user.id+'/Workers').then(
            (response)=>{
                console.log(response.data)
                setWorkers(response.data)
            }
        )
    },[])

    return (
        <SidebarComponent>
            <div id="workers-search"></div>
            <div id="view-workers">
                {
                    workers.map(
                        (worker) => {return(
                            <Card title={worker.name} className='worker-card' >  
                                <img src={worker.photo} alt={worker.name + "'s Photo"}/>
                                {worker.CPF}
                                <br/>
                                {worker.number_phone}
                            </Card>
                        )}
                    )
                }
            </div>
            <OverlayTrigger title='Adicionar Funcionário' triggerComponent={<button title='Adicionar Funcionário'>Adicionar Funcionário</button>}>
                <form onSubmit={submitWorker}>
                <Input
                name='name'
                label='Nome'
                onChange={(e) => {name = e.target.value }}
                />
                <Input
                name='email'
                label='Email'
                onChange={(e) => {email = e.target.value }}
                />
                <Input 
                type='number'
                name='cpf'
                label='CPF'
                onChange={(e) => {cpf = parseInt(e.target.value) }}
                />
                <Input
                type='number'
                name='phone'
                label='Telefone'
                onChange={(e) => {phone = parseInt(e.target.value) }}
                />
                <Input
                name='photo'
                label='Foto(URL)'
                onChange={(e) => {name = e.target.value }}
                />
                <button type='submit' title='Criar Funcionário'>Criar novo Funcionário</button>
		</form>               
            </OverlayTrigger>
        </SidebarComponent>
    )
}