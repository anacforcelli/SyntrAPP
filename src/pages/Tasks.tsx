import React, { useState, FormEvent } from 'react';
import Input from "../components/Input";
import OverlayTrigger from "../components/OverlayTrigger";
import SidebarComponent from '../components/Sidebar';
import api from '../Services/api'

export interface Task {
  name : string,
  description : string,
  //subactivities : Array<Task>,
  //start : Date,
  //finish : Date
}

export interface TasksProps {};

//useEffect

const Tasks: React.FC<TasksProps> = (props) => {  

  const [name,setName]          = useState('');
  const [description, setDescr] = useState('');
  //const [subActivities,setSubs] = useState('');
  //const [start,setStart]   = useState('');
  //const [finish, setFinish] = useState

  function submit (e: FormEvent){
      e.preventDefault();
      console.log({name, description});
      api.post('/Activities', {
        name: name,
        description: description,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  var response : any = ''//api.get('/Activities')
  var taskList : Array<Task> = response //.data
  var taskListHTML : any = ''
  
  //const [selectedActiv,setSelection] = useState();

  if (taskList){
      for (let task of taskList){
        taskListHTML += <div className='task-item'>{JSON.stringify(task)}</div>
    }
  }

  return (
    <SidebarComponent>
      <div id="tasks-screen">
        <div id="tasks-overview" dangerouslySetInnerHTML={{__html : taskListHTML}}/>
        <div id="task-menu">
          <OverlayTrigger triggerComponent={ <button>Nova Atividade</button> }>
            <form action="submit"> {/*handle each optional inputs later*/}
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
          </OverlayTrigger>
        </div>
      </div>
    </SidebarComponent>
  );
}

export default Tasks;
