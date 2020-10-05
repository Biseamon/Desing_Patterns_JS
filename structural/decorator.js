class Server{
    constructor(ip, port) {
       this.ip = ip
       this.port = port
    }

    getUrl(){
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server){
    server.isAWS = true
    server.awsInfo = function(){
        return server.getUrl()
    }
    return server
}

const serverOne = aws(new Server("122.22.12.11", "3000"))
console.log(serverOne.isAWS)
console.log(serverOne.awsInfo())