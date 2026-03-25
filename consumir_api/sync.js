
const response = await fetch("https://api.github.com/users")

if(!response.ok){
    throw new Error("Deu errado meu chapa. STATUS:"+response.status)
}

const data = await response.json()

const dados_tratados = data.map(item =>({
        login: item.login,
        id: item.id
    }))

const dados_filtrados = data.filter(item => item.login == "mojombo");


console.log(dados_tratados)
console.log(dados_filtrados)