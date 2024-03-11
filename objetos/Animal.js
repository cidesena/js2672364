class Animal{    
    constructor(nombre, especie){
        this._nombre=nombre;
        this._especie=especie;
    }
    saludo(){
        let saludo2=()=>'prueba'//no sirve como método
        return 'Hola '+this._nombre
    }
    set nombre(nombre){this._nombre=nombre}
    get nombre(){return this._nombre}
    
}


module.exports = {ParentClass: Animal}
//module.exports=Animal