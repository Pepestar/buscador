import axios from "axios";

// 60812450/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;