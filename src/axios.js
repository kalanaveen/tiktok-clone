import axios from 'axios';

const instance = axios.create({
    baseURL:"backend url"
});

export default axios;