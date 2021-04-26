import React, {useContext, useState, useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import api from '.././Services/api';

import {User} from '../Types'

interface AuthState{
    token : string;
    user  : User;
}

interface AuthContextData{
    user    : User;    
    LogOut(): void;
    signIn({username, password}: LoginCredentials): Promise <string | undefined>;
}

interface LoginCredentials{
    username:string;
    password:string;
}

export const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const [userData, setUserData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Project:token');
        const user = localStorage.getItem('@Project:user');

        if (user && token) {
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });

    const history = useHistory();

    const signIn = useCallback(async ({username,password}:LoginCredentials) => {
        try{
            const response = await api.post('/login/', {
                username,
                password,
            });

            const { token } = response.data;
            console.log(token);
            localStorage.setItem('@Project:token', token);

            if(!!token){
                const userResponse = await api.get('users/?search='+ username);
                const user = userResponse.data[0];

                localStorage.setItem('@Project:user', JSON.stringify(user));
                console.log(token);
                setUserData({token, user});
                history.push('/feed');
            }
        }

        catch(error){
            const userData = error.response.data;

            if (error.response){
                if(userData.global !== undefined && userData.global[0]
                === "Impossível fazer login com as credenciais fornecidas."){
                    alert("Atenção usuário e senha não existem")
                    history.push('/')
                }
                
                if(userData){
                    if(userData.global !== undefined && userData.username[0]
                    === "Atenção esse campo não pode ser em branco."){
                        return ("Atenção: Usuário em branco")
                        history.push('/')
                    }
                    if(userData.global !== undefined && userData.password[0]
                    === "Atenção esse campo não pode ser em branco."){
                        return ("Atenção: Senha em branco")
                        history.push('/');
                    }}
            }
        }
    },[history]);

    const LogOut = () => {
            console.log(localStorage.getItem('@Project:token'));
            console.log(localStorage.getItem('@Project:user'));
            localStorage.removeItem('@Project:token');
            localStorage.removeItem('@Project:user');
            history.push('/');

            setUserData({} as AuthState);
    };

    return(
        <AuthContext.Provider value={{ user: userData.user, signIn, LogOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): AuthContextData{
    const context = useContext(AuthContext);
    return context;
}

export default useAuth;
