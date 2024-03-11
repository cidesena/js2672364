function producto(x){    
    return function(y){
        return x*y
    }
}
const operacion=producto(5)
console.log(operacion(10))

const producto1=x=>y=>x*y
const operacion1=producto1(2)
console.log(operacion1(10))