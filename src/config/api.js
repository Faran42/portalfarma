import axios from 'axios';

const api = axios.create({
// .. where we make our configurations
    baseURL: 'portalpaciente.brazilsouth.cloudapp.azure.com:3333/'
});




// Where you would set stuff like your 'Authorization' header, etc ...
// api.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM api';

// Also add/ configure interceptors && all the other cool stuff

export default api;

