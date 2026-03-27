import axios from 'axios';
//https://api.github.com/users

interface User {
    login: string;
}

async function get_data(url: string): Promise<User[]>{
    const response = await axios.get<User[]>(url);
    return response.data;
}

const url: string = "https://api.github.com/users";

const data = await get_data(url);

const transform = data.map(item => ({
    login: item.login
}))

console.log(transform);