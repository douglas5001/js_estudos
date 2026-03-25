class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    list_data(){
        console.log(`
            Dados Pessoais ======
            Nome: ${this.name}
            Idade: ${this.age}
            email: ${this.email}
            `)
    }
}

const name = "Douglas";
const age = 19;
const email = "douglas@gmail.com";


const person = new Person(name, age, email);

person.list_data()