
const stop_fun = true;
let page = 99;
let total_dados = []

while(stop_fun == true){
    let url = `https://api.github.com/users?per_page=1&page=${page}`;
    let dados;
    try{
        const response = await fetch(url);
        dados = await response.json();
    } catch(error){
        console.log(error);
        break;
    }

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

    
