function operar(operacion, num1, num2){
       return operacion(num1,num2)
}
function sumar(n1,n2){return n1+n2}
function multiplicar(n1,n2){return n1*n2}
function dividir(n1,n2){return n1/n2}
function restar(n1,n2){return n1-n2}
function residuo(n1,n2){return n1%n2}

console.log(operar(sumar,10,20))
console.log(operar(multiplicar,10,20))
console.log(operar(dividir,10,20))
console.log(operar(restar,10,20))
console.log(operar(residuo,10,20))
console.log('-----------------------------------------------')
const operar1=(operacion1,num1,num2)=>operacion1(num1,num2)
console.log(operar1(sumar,100,3))
