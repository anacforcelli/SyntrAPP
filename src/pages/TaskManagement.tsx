import React, { useState, FormEvent } from 'react'

import Input from '../components/Input'

import { Task } from '../pages/Tasks'

//data
//import api from '../Services/api'
import {tasks} from '../FakeData/tasks'

function TaskManagement() {

        const [Name, setName] = useState<string>('');
        const [Descr, setDescr] = useState<string>('');

        function submitTask (e: FormEvent){
                e.preventDefault();
                var newTask : Task = {name : Name, description: Descr}
                tasks.push(newTask)
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
        )
}

export default TaskManagement;
