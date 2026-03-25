const usuarios = [
    { 
        nome: "Douglas", idade: 24, email: "douglas@dev.com",
        endereco: { rua: "Av. Paulista", bairro: "Bela Vista", numero: 1000 }
    },
    { 
        nome: "Aline", idade: 28, email: "aline@tech.com",
        endereco: { rua: "Rua das Flores", bairro: "Jardim Amália", numero: 45 }
    },
    { 
        nome: "Ricardo", idade: 35, email: "ricardo@backend.io",
        endereco: { rua: "Rua Chile", bairro: "Rebouças", numero: 120 }
    },
    { 
        nome: "Beatriz", idade: 22, email: "beatriz@frontend.com",
        endereco: { rua: "Av. Brasil", bairro: "Funcionários", numero: 500 }
    },
    { 
        nome: "Marcos", idade: 30, email: "marcos@fullstack.dev",
        endereco: { rua: "Rua do Ouvidor", bairro: "Centro", numero: 12 }
    },
    { 
        nome: "Fernanda", idade: 26, email: "fernanda@data.ai",
        endereco: { rua: "Rua Aimorés", bairro: "Lourdes", numero: 88 }
    },
    { 
        nome: "Tiago", idade: 40, email: "tiago@cloud.br",
        endereco: { rua: "Av. Ipiranga", bairro: "República", numero: 200 }
    },
    { 
        nome: "Larissa", idade: 23, email: "larissa@ux.design",
        endereco: { rua: "Rua Augusta", bairro: "Consolação", numero: 1500 }
    },
    { 
        nome: "Gabriel", idade: 31, email: "gabriel@security.net",
        endereco: { rua: "Rua XV de Novembro", bairro: "Centro", numero: 33 }
    },
    { 
        nome: "Julia", idade: 27, email: "julia@mobile.app",
        endereco: { rua: "Av. Beira Mar", bairro: "Meireles", numero: 10 }
    }
];

// Buscando nome
user_name = usuarios[1]
console.log(user_name.nome)

for(user of usuarios){
    console.log(user);
    if(user.nome === "Ricardo"){
        break;
    }
}

console.log("Aqui vamos fazer por INDEX")


for(const index in usuarios){
    console.log(index)
    if(index >= 5){
        break;
    }
}

console.log(user_name.endereco.rua)