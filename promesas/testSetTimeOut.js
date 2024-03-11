// function cualquiera(){}
 
// setTimeout(()=>console.log('hola'),2000)
// setTimeout(()=>'hola',2000)

const retorno=()=>{
    //let x=length('aaa')
    //return 'aaa'
    console.log('AAA')
 }
function retorno2(){return 'aaa'}


// function prueba(){    
//     //setTimeout(()=>console.log('Hola'),2000)
//     //setTimeout(()=>'Hola',2000)
//     //setTimeout(function(){return 'aaa'},2000)
//     setTimeout(retorno2,2000)
//     //return 'hola adso'    
//     //console.log('Antes de setTimeout')
// }

function sumar(x,y){
    return x+y
    }

function prueba(callback,x,y){    
 setTimeout(function(){
    console.log(callback(x,y))
 },2000)
}
// console.log(prueba())
// console.log(prueba())
//sumar(1,2)
prueba(retorno2)
prueba(sumar,100,34)