import React, { useState, FormEvent, Component } from 'react';
import Input from "../../components/Input";
import OverlayTrigger from "../../components/OverlayTrigger";
import SidebarComponent from '../../components/Sidebar';
import api from '../../Services/api'

export interface Activity {
  name : string,
  description : string,
  //subactivities : Array<Activity>,
  //start : Date,
  //finish : Date
}

export interface IActivitiesProps {};


//force update official gambiarra https://stackoverflow.com/q/46240647
function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}


const Activities: React.FC<IActivitiesProps> = (props) => {  

  const forceUpdate = useForceUpdate();

  const [name,setName]          = useState('');
  const [description, setDescr] = useState('');
  //const [subActivities,setSubs] = useState('');
  //const [start,setStart]   = useState('');
  //const [finish, setFinish] = useState

  function submit(e: FormEvent){
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
      forceUpdate()
  }

  var response : any = ''//api.get('/Activities')
  var activityList : Array<Activity> = response //.data
  var activityListHTML : any = ''
  
  //const [selectedActiv,setSelection] = useState();

  if (activityList){
      for (let activity of activityList){
        activityListHTML += <div className='activity-item'>(JSON.stringify(activity))</div>
    }
  }

  return (
    <SidebarComponent>
      <div id="activities-screen">
        <div id="activities-overview" dangerouslySetInnerHTML={{__html : activityListHTML}}/>
        <div id="activity-menu">
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

export default Activities;
