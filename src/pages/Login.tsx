import React, { useState, useCallback, FormEvent } from 'react';

import Input from '../components/Input';
import useAuth from '../Routes/auth';

function Login(){
  const { signIn } = useAuth();

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = useCallback(async (e:FormEvent) => {
    e.preventDefault();

    await signIn({username, password});
  },[signIn, username, password]);

  return (
    <div id="page-landing">
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
    </div>
  )
}

export default Login;