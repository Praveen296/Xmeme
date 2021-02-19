import axios from 'axios';

//Used to connect backend to front-end
const instance = axios.create({
    baseURL : 'https://xmeme-backend-praveen.herokuapp.com'
})

export default instance;