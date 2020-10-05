const car = {
    doors: 4,
    
    init(){
        console.log(`I have ${this.doors} doors and my owner is ${this.owner}`)
    }
}

const ownerOfTheCar = Object.create(car, {
    owner: {
        value: "Marincik"
    }
})

console.log(ownerOfTheCar.__proto__ === car)

ownerOfTheCar.init()