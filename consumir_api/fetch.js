


fetch("https://api.github.com/users")
.then(response => { 
return response.json().then(data => ({
    status: response.status,
    data: data,
}));
})
.then(res => {
    console.log(res.status)
    console.log(res.data)
})
.catch(error => console.error('Erro:', error));

