import axios from 'axios';

const api = axios.create(
    {
        baseURL:'https://604a73889251e100177ceb12.mockapi.io/syntrapp/API',
    }
)

export default api;