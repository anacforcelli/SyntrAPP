import React, {FormEvent, useState} from 'react';
import { Body } from './styles';
import { useHistory, Link } from  'react-router-dom';

import Input from '../.././components/Input';

function SignUp2(){

    const [senha,setSenha] = useState('');

    function submit(e: FormEvent){
        e.preventDefault();
        console.log({senha,});
    }

    const history = useHistory();
    function signup(){
        history.push('/signup1');
    }
    return (
    <div id="page-landing">
        <Body>
            <main>
                <div className="voltar">
                    <button onClick={signup}/>
                </div>
                <p>Crie sua conta</p>
                <form onSubmit={submit}>
                    <span id="span">É preciso ter 8 caracteres ou mais</span>
                    <Input
                    name="senha"
                    label="Senha"
                    value={senha}
                    type="password"
                    onChange={(e) => {setSenha(e.target.value)}}/>
                    
                    <div className="acesso">
                        <Link to='/feed' className="Feed">
                            <button type="submit">Avançar</button>
                        </Link>
                    </div>
                </form>
            </main>
        </Body>
    </div>

        )
}


export default SignUp2;