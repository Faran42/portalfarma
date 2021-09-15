import axios from 'axios';

const api = axios.create({
// .. where we make our configurations
    baseURL: 'https://5d06-138-122-251-241.ngrok.io/'
});

// Where you would set stuff like your 'Authorization' header, etc ...
// api.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM api';

// Also add/ configure interceptors && all the other cool stuff

export default api;