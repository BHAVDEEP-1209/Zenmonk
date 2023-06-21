import axios from "axios";

const fetchData = (id)=>
    axios.get(`http://localhost:3000/accounts/${id}`);



export const fetchDataInfo =(id)=>
    axios.get(`http://localhost:8080/users/${id}`)


export default fetchData