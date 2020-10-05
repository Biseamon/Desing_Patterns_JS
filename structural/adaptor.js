class OldCalc {
    operations(t1, t2, operation){
        switch(operation){
            case "add": return t1 + t2
            case "sub": return t1 - t2
            default: NaN
        }
    }
}

class NewCalc{
    add(t1, t2){
        return t1 + t2
    }

    sub(t1, t2){
        return t1 - t2
    }
}

class CalcAdaptor{
    constructor(){
        this.calc = new NewCalc()
    }

    operations(t1, t2, operation){
        switch(operation){
            case "add": return this.calc.add(t1, t2)
            case "sub": return this.calc.sub(t1, t2)
            default: return NaN
        }
    }

}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 5, "add"))

const newCalc = new NewCalc()
console.log(newCalc.add(10, 8))

const adapter = new CalcAdaptor()
console.log(adapter.operations(30, 4, "sub"))