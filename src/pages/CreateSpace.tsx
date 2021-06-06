import React from 'react'
import SidebarComponent from '../components/Sidebar'
import Input from "../components/Input";

function CreateSpace() {
    let landImage : any;
    return (
        <SidebarComponent>
            <h1>Registrar Propriedade Rural</h1>
            <form action="submit">
                <Input name='coordinate-x'  label='Coordenada X'/>
                <Input name='coordinate-y'  label='Coordenada Y'/>
                <Input name='climate'       label='Clima'/>
                <Input name='picture'       label='Imagem Aérea/Croqui' type='file' onChange={(e)=> {landImage = e.target.value}} />
            </form>
        </SidebarComponent>    
    )
}

export default CreateSpace
