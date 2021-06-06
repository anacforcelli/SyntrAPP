import React, {useState} from 'react'
import SidebarComponent from "../components/Sidebar";

function CreateSAF() {
    const [compositeMode, setCompositeMode] = useState(false)
    return (
        <SidebarComponent>
            <h1>Cadastrar Talhão</h1>
            <p>Cadastre seu SAF preenchendo as informações necessárias no modo Simples ou no modo Composto.
Sugerimos o cadastro no modo Composto para um melhor acompanhamento do progresso de sua agricultura sintrópica.</p>
            <div id='buttons-div'>
                <button onClick={ ()=>{setCompositeMode(false)} }> Modo Simples  </button>
                <button onClick={ ()=>{setCompositeMode(true)} }>  Modo Composto </button>
            </div>
            {compositeMode ? <h1>Modo Composto</h1> : <h1>Modo Simples</h1> }
        </SidebarComponent>
    )
}
 
export default CreateSAF
