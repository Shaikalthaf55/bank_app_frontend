import axios from 'axios'

const api=axios.create({
    baseURL:"https:localhost:8080/bank_app",
});
export default api;