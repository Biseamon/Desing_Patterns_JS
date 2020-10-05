//this was before classes

function Server1(name, ip){
    this.name = name
    this.ip = ip
}

Server1.prototype.getUrl = function() {
    return `https://${this.ip}:80`
}

//this is with classes

class Server2{
    constructor(name, ip){
        this.name = name
        this.ip = ip
    }

    getUrl(){
        return `https://${this.ip}:70`
    }
}


const aws = new Server1("AWS", "82.90.90.11")
const aws1 = new Server2("AWS", "82.90.90.11")
console.log(aws.getUrl())
console.log(aws1.getUrl())