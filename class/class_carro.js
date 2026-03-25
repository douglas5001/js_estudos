


class Car {
    constructor(marca, model) {
        this.marca = marca;
        this.model = model;
    }

    businar(){
        console.log(`${this.marca}. BBBI`);
    }
}


const car = new Car("Toya", "corola");

console.log(car.marca)

car.businar();