import axios from 'axios';

const token = localStorage.getItem('@Project:token');
const apiAuth = axios.create(
    {
        baseURL:'http://piupiuwer.polijr.com.br/',
        headers:{
            Authorization: `JWT ${token}`
        }
    }
)

export default apiAuth;