import React, { useState, FormEvent } from 'react'

import Input from '../components/Input'
import SidebarComponent from '../components/Sidebar'

//data
//import api from '../Services/api'
import {Task} from '../Types'

function TaskManagement() {

	const [Name, setName] = useState<string>('');
	const [Descr, setDescr] = useState<string>('');

	function submitTask (e: FormEvent){
		e.preventDefault();
		/*api.post('/Activities', {
				name: name,
				description: description,
		})
		.then(function (response) {
				console.log(response);
		})
		.catch(function (error) {
				console.log(error);
		});*/
	}

	return (
	<SidebarComponent>
		<div id='input-space'>
		<form onSubmit={submitTask}> {/*handle each optional inputs later*/}
			<Input
			name='name'
			label='name'
			onChange={(e) => {setName(e.target.value) }}
			/>
			<Input
			name='description'
			label='description'
			onChange={(e) => {setDescr(e.target.value)}}
			/>
			<button type='submit' title='Criar nova Atividade'>Criar nova Atividade</button>
		</form>
		</div>
	</SidebarComponent>
	)
}

export default TaskManagement;
