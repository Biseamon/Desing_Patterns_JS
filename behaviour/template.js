class Employee {
    constructor(name, salary){
        this.name = name
        this.salary = salary
    }

    responsibility(){}

    work() {
        return `${this.name} is doing ${this.responsibility()}`
    }

    getPaid() {
        return `${this.name} has the salary of ${this.salary}`
    }

}

class Developer extends Employee{
    constructor(name, salary) {
       super(name, salary)
    }

    responsibility(){
        return "Process of creating programs"
    }
    
}

class Tester extends Employee{
    constructor(name, salary) {
       super(name, salary)
    }

    responsibility(){
        return "Process of testing programs"
    }
    
}


const dev = new Developer("Marin", 1200)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester("Marcela", 1600)
console.log(tester.getPaid())
console.log(tester.work())