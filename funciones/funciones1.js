const saludar = () => console.log("Soy una flecha");
console.log(typeof saludar);
saludar();
const saludo = (name) => console.log(`Hola ${name}`);
saludo("Luis");
const greeting = (n, p) => console.log(`Hola ${n} ${p}`);
greeting("Catalina", "Luna");
const saludo1 = (name) => console.log(`Hola ${name}`);

const saludoreturn = (name) => `Hola ${name}`;
console.log(saludoreturn("Ana"));

const operacion = (x, y) => {
  if (x > y) {
    return x + y;
  } else {
    return x * y;
  }
};

const primo=num=>{
    let cont=0;
    for (let i=1; i <=num ; i++) {
        if(num%i==0){
            cont++;
        }        
    }
    if(cont==2)
    return `${num} es primo`
    else return `${num} no es primo`
}
console.log(primo(11))

const c=celcius=>(celcius*(9/5))+32
console.log(c(15))

const pulgada=cm=>cm/2.54
console.log(pulgada(10))