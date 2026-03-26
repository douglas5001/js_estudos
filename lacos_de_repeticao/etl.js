
// https://api.github.com/users

async function extract(url) {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error("Erro na API")
    }

    const data = await response.json()

    return data
}

async function tratar_dados(data) {
    const tratado = data.map(item => ({
        login: item.login ?? "Nao encontrado",
        id: item.id ?? "Nao encontrado",
        falso: item.falso ?? "Nao encontrado"
    }))
    return tratado
}

let verdade = true;
let page = 1;
let url = `https://api.github.com/users?per_page=1&page=${page}`;
let total_data = [];

while(verdade == true){
    const data = await extract(url);

    const tratados = await tratar_dados(data)

    total_data.push(...tratados)

    console.log("Passou na pagina"+ page)
    console.log(total_data)
    if(page == 2){
        break;
    }
    page++;
}