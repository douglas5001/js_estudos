

const data = [
    {
        nome: "douglas"
    },
    {
        nome: "pedro"
    },
    {
        nome: "lucas"
    }
]

// OF nos retorna um obajeto para uso
for(const usuario of data) {
    console.log(usuario.nome)

    if(usuario.nome === "pedro"){
        console.log("STOP; parou em predro ==")
        break;
    }
}

// IN nos retorna o indeice
for (const index in data) {
    console.log(index)

    const usuario = data[index]

    if (index == 1) {
        console.log(`Parou em ${usuario.nome}`)
        break;
    }
}