//hoisting
console.log(saludo('Antes del codigo'))
function saludo(name){
    let variable
    //console.log('Hola')
    return `Hola ${name}`
}
//console.log(saludo('Hector','Perez'))
console.log(saludo())
// console.log(saludo('Juan'))
// console.log(saludo('MAria'))
// saludo()
// saludo()
let x=8
x=3
const y=1
//y=2
//funciones flecha
const saludar=()=>console.log('Soy una flecha')
 console.log(typeof(saludar))

 const anonima=function(){console.log('soy anonima')}
 anonima()






 
 //Arreglos
 let array1=[]
 let array2=Array()
 array1[1]=100
 array1.push(2.3)
console.log(array1)
//  console.log(typeof(array1))
//  console.log(typeof(array2))
