import React, { useState, useCallback, FormEvent } from 'react';

import Input from '../components/Input';
import { useHistory } from  'react-router-dom';
import { InputLogin } from './Loginstyles';

import useAuth from '../Routes/auth';

function Login(){
  const { signIn } = useAuth();
  const userData = useAuth();

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = useCallback(async (e:FormEvent) => {
    e.preventDefault();

    await signIn({username, password});
  },[signIn, username, password]);

  const history = useHistory();
  function inscrever(){
    history.push('/');
  }

  return (
    <div id="page-landing">
        <InputLogin>
            <h1>Entrar no syntrWeb</h1>
            <form onSubmit={handleLogin}>
                <Input name="name"
                    label="Celular, e-mail ou nome de usuário"
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                />
                <Input name="password"
                    label="Senha"
                    type="password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <button type="submit">Login</button>
            </form>
        </InputLogin>
    </div>
  )
}

export default Login;