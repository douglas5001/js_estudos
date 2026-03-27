
//https://api.github.com/users

async function get_data(url: string){
    const response = await fetch(url);
    return response.json();
}

const url: string = "https://api.github.com/users";

const data = await get_data(url);

console.log(data);