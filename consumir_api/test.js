


// fetch("https://api.github.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


fetch("https://api.github.com/userss")
    .then(response => {
        if(!response.ok){
            throw new Error(`Erro no servidor: ${response.status}`);
        }
        return response.json().then(data => ({
            status: response.status,
            data: data
        }))})
    .then(data => console.log(data.status, data.data))
    .catch(error => console.log(error))