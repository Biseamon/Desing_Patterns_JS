class Car{
    constructor(model, price){
        this.model = model
        this.price = price
    }
}

class CarFactory{
    constructor(rops) {
       this.cars = []
    }

create(model, price){
    const candidate = this.getCar(model)
    if(candidate){
        return candidate
    }

    const newCar = new Car(model, price)
    this.cars.push(newCar)
    return newCar
    
}

getCar(model){
    return this.cars.find(car => car.model === model)
 }
}

const factory = new CarFactory()

const bmwX6 = factory.create("bmw", 1000)
const audi = factory.create("audi", 11000)
const lada = factory.create("bmw", 3)


console.log(bmwX6 === lada)

