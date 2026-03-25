
const stop_fun = true;
let page = 99;
let total_dados = []

async function extract(url){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Tche!! Deu erro aqui");
        }
        const data = await response.json();
        return data
    } catch(error){
        console.error(error)
    }
}

while(stop_fun == true){
    let url = `https://api.github.com/users?per_page=1&page=${page}`;
    
    const dados = await extract(url)

    console.log("Rodou a pagina", page)
    console.log(dados)

    if (page === 101) {
                console.log("Limite de teste atingido.");
                break;
            } 
    if(!dados || dados.length === 0){
        break;
    }
    page++

}

    
