import React, {useEffect, useState} from 'react';

//components
import SidebarComponent from '../components/Sidebar';

//data
import api from "../Services/api";


export const CostViewer = (props : any) =>{
	const [costfilter, setCostFilter]   = useState('material')
    useEffect(()=>{
        switch (costfilter) {
            case 'material':
                console.log('material')
                break;
            case 'machinery':
                console.log('machinery')
                break;
            case 'workers':
                console.log('workers')
                break;
            default:
                break;
        }
    }, [costfilter])

    return(
        <>
        <label>Escolha um filtro</label>
        <select name="filters" id="filters" onChange={(e)=>{setCostFilter(e.target.value)}}>
            <option value="material">Materiais</option>
            <option value="machinery">Maquinário</option>
            <option value="workers">Mão-de-Obra</option>
        </select>
        <div className="stat-viewer">
            {costfilter}
        </div>
        </>
    )
}


function Stats(){
	const [filter, setFilter]   = useState('general')

	useEffect(() => {
        switch (filter) {
            case 'general':
                console.log('general')
                break;
            case 'costs':
                console.log('costs')
                break;
            case 'worker':
                console.log('worker')
                break;
            default:
                break;
        }
	}, [filter]);

	return (
		<div className="home">
			<SidebarComponent>
				<h1>Estatísticas</h1>
				<div id="filter-buttons">
					<button onClick={()=>{setFilter('general')}}>Geral</button>
					<button onClick={()=>{setFilter('costs')}}>Custos</button>
					<button onClick={()=>{setFilter('worker')}}>Funcionários</button>
				</div>
                <CostViewer filter={filter}></CostViewer>
			</SidebarComponent>
		</div>
	);
}
export default Stats;