import axios from 'axios';
// https://free.currencyconverterapi.com/api/v5/
// convert?q=USD_BRL&compact=ultra&apiKey=1aa1c7d2aada8c743707
const api = axios.create({
    baseURL: 'https://free.currencyconverterapi.com/api/v5/'
})

export default api;