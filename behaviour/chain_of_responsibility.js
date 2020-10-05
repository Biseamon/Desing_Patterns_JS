class MySum{
    constructor(initValue = 10){
        this.sum = initValue
    }

    add(value){
        this.sum += value
        return this
    }
}

const sum1 = new MySum()
console.log(sum1.add(10).add(5).sum)

const sum2 = new MySum(0)
console.log(sum2.add(10).add(4).sum)

