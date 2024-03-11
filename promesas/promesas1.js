aprendices=[
    {nombre:'Ana',edad:15},
    {nombre:'Pedro',edad:18},
    {nombre:'Luis',edad:16},
    {nombre:'Lucas',edad:19}
]
//console.log(typeof(aprendices))
const promise = new Promise((resolve, reject) => {
    console.log("Executor");
    bool=true
    if (bool) {
        resolve(aprendices);  
    } else {
        reject('hubo un fallo');    
    }    
    });

    promise
    .then(response=>response=JSON.stringify(response))
    .then(result => {
        console.log(result)
    })
    .then(result=>console.log(typeof('.....'+result)))
    .catch(result => {
    console.log(result).JSON;
    })
    // .finally(
    //     console.log('simpre se ejecuta')
    // )
    
    console.log("Hi!");