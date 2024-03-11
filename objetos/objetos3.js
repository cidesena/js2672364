function Aprendiz(nombre, ficha){
    this._nombre=nombre
    this._ficha=ficha
    //nombre=()=>this._nombre
    ficha=()=>this._ficha
    nombre=(nombre)=>this._nombre=nombre
    ficha=(ficha)=>this._ficha=ficha
}

ob=new Aprendiz('Jose','Adso')
console.log(ob)
console.log(typeof(ob))
console.log(ob.nombre)
//console.log(ob['ficha'])
//console.log(ob.ficha)


