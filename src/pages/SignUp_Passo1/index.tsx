import React, {FormEvent, useState} from 'react';
import { Body } from './styles';
import { useHistory } from  'react-router-dom';

import Input from '../.././components/Input';

function SignUp(){

    const [name,setName] = useState('');
    const [day,setDay] = useState('');
    const [month,setMonth] = useState('');
    const [year,setYear] = useState('');

    function submit(e: FormEvent){
        e.preventDefault();
        console.log({name,day,month,year,});
    }

    const history = useHistory();
    function inscrever(){
        history.push('/signup2');
    }

    function login(){
        history.push('/');
    }

    return (
    <div id="page-landing">
        <Body>
            <main>
                <div className="voltar">
                    <button onClick={login}/>
                </div>
                <p>Crie sua conta</p>
                <form onSubmit={submit}>
                    <Input
                    name="name"
                    label="Nome"
                    value={name}
                    type="text"
                    onChange={(e) => {setName(e.target.value)}}/>
                    
                    <label>Data de nascimento</label>
                    <span>Isso não será exibido publicamente. Confirme sua própria idade, mesmo se esta conta for de empresa de um animal de estimação ou outros.</span>
                    
                    <div id="data">
                        <Input
                        name="day"
                        label="Dia"
                        value={day}
                        type="number"
                        onChange={(e) => {setDay(e.target.value)}}/>
                        <Input
                        name="month"
                        label="Mês"
                        value={month}
                        type="number"
                        onChange={(e) => {setMonth(e.target.value)}}/>
                        <Input
                        name="year"
                        label="Ano"
                        value={year}
                        type="number"
                        onChange={(e) => {setYear(e.target.value)}}/>
                    </div>
                    
                    <div className="acesso">
                        <button type="submit" onClick={inscrever}>Avançar</button>
                    </div>
                </form>
            </main>
        </Body>
    </div>

        )
}


export default SignUp;