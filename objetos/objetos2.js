// let flecha=()=>'hola'
// let flechas=function(){return 'hola'}
export class Animal{    
    constructor(nombre, especie){
        this._nombre=nombre;
        this._especie=especie;
    }
    saludo(){
        let saludo2=()=>'prueba'//no sirve como método
        return 'Hola '+this._nombre
    }
    // setNombre(nombre){this.nombre=nombre}
    set nombre(nombre){this._nombre=nombre}
    //nombre=(nombre)=>this._nombre=nombre
    //getNombre(){return this.nombre}
    get nombre(){return this._nombre}
    //nombre=()=>this._nombre 
    
}

objeto=new Animal('perro','mamifero')
// console.log(objeto)
// console.log(objeto.saludo())
// objeto.setNombre('nuevo nombre')
// console.log(objeto.getNombre())
console.log(objeto.nombre)
objeto.nombre="Lobo"
console.log(objeto.nombre)

//export class Animal;
//module.exports=Animal
