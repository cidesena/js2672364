const llenarArray=(arreglo,cantidad)=>{
    for (let index = 0; index < cantidad; index++) {
        arreglo[index]=Math.floor(Math.random()*100)
    }
}
x=new Array()
llenarArray(x,10)

const funcion=()=>{
    return  new Promise((resolve,rejec)=>{
        setTimeout(()=>resolve(x),2000)
    })
}
//console.log(funcion())
funcion()
.then(result=>console.log(result))
.then(result=>console.log(typeof(result)))

// function generar (cantidad){
//     return new promise ((resolve,reject) =>{
//         if (cantidad <= 0 )
//         {
//             reject('DEBE SER MAYOR A 0 ');
//         }
//         else{
            
//          const aleatorios = Array.from({ length: cantidad }, () => Math.random());
//             resolve(aleatorios);
//         } 
        
    
//     })}