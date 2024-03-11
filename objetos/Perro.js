//import Animal from "./Animal";
var parent=require("./Animal")
class Perro extends parent.ParentClass
{
constructor(nombre,especie,raza){
    super(nombre,especie);
    this._raza=raza
}
}

ob=new Perro('Terrestres','Mamifero','Pug')
console.log(ob)