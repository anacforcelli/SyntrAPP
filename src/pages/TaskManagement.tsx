import React, { FormEvent, useContext } from 'react'

import Input from '../components/Input'
import SidebarComponent from '../components/Sidebar'

//data
import api from '../Services/api'
import { AuthContext } from '../Routes/auth'
import { Worker } from '../Types'

function TaskManagement() {

	const {user} = useContext(AuthContext)

	let newTaskName : string, 
		newTaskDescription : string

	let workers : Array<Worker> = []

	api.get('/Users/'+user.id+'/Workers/').then(
		(response) => {
			workers = response.data
		}
	)

	const submitTask = (e: FormEvent) => {
		e.preventDefault();
		api.post('/Users/'+user.id+'/Farms/1/Space/1/SAF_spaces/1/Plants_allocated/1/Tasks', {
				name: newTaskName,
				description: newTaskDescription,
				plantId : 1,
		})
		.then(function (response) {
				console.log(response);
		})
		.catch(function (error) {
				console.log(error);
		});
	}

	return (
	<SidebarComponent>
		<div id='input-space'>
		<form onSubmit={submitTask}> {/*handle each optional inputs later*/}
			<Input
			name='name'
			label='name'
			onChange={(e) => { newTaskName=e.target.value }}
			/>
			<label htmlFor="description"/>
			<textarea
			id = 'description'
			name='description'
			onChange={(e) => { newTaskDescription = e.target.value }}
			/>
			<button type='submit' title='Criar nova Atividade'>Criar nova Atividade</button>
		</form>
		</div>
	</SidebarComponent>
	)
}

export default TaskManagement;
