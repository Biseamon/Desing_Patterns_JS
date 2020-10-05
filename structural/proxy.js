function newtworkFetch(url){
    return `${url} - Response from server`
}

const cache = new Set()
const proxiedFetch = new Proxy(newtworkFetch, {
    apply(target, thisArgs, args){
        const url = args[0]
        if(cache.has(url)){
            return `${url} - Response from cache`
        }else{
            cache.add(url)
            return Reflect.apply(target, thisArgs, args)
        }
    }
})

console.log(proxiedFetch("angular.io"))
console.log(proxiedFetch("react.io"))
console.log(proxiedFetch("angular.io"))