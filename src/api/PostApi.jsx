import axios from "axios";

//create a new instance of axios containing baseURL of our API
const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});

