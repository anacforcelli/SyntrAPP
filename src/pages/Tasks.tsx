import React from 'react';
import { Link } from 'react-router-dom'

//components
import SidebarComponent  from '../components/Sidebar';
import Card              from '../components/Card';

//style
import './styles/tasks.css'

//data
//import api from '../Services/api'
import { tasks } from '../FakeData/tasks'


export interface Task {
  name : string,
  description : string,
  //subactivities : Array<Task>,
  //start : Date,
  //finish : Date
}

function Tasks () {  

  //var response : any = ''//api.get('/Activities')
  //var taskList : Array<Task> = response.data

  return (
    <SidebarComponent>
      <div id="tasks-screen">
        <div id="tasks-overview">
          {tasks.map((thisTask) => {
              return(
                <Card className = 'task-card' title={thisTask.name}>
                  <p>{thisTask.description}</p>
                </Card>
              )
            })
          }
        </div>
        <div id="task-menu">
          <Link to='/newtask'><button>Nova Tarefa</button></Link>
        </div>
      </div>
    </SidebarComponent>
  );
}

export default Tasks;
