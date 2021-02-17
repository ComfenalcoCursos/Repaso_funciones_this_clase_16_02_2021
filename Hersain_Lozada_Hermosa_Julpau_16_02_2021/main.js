
//Funciones declaracion
function saludar1(p1){
    return `(Saludar1) - Hola ${p1} ¿cómo estás?`;
}
console.log(saludar1('Hersain'));

//Funciones expresión
let saludar2 = function(){
    return `(Saludar2) - Hola ${p1} ¿cómo estás?`;   
}
console.log(saludar2('Lozada'));


// Funciones anónimas 
let Saludar = function(p1="Julpau"){
    return `Hola ${p1} como estas`;
}
console.log(Saludar);
console.log(Saludar());


// Funciones Callbacks 
const fB = function () {
    return `Hola, ¿Cómo estás?`;
}

const fA = function (Callbacks,p1) {
    parar:
    do{
        const i = ~~(Math.trunc(Math.random()*5));
        if (i==3){
            return Callbacks(p1);
        }else{
            continue parar;
        }
    }while (true)
}
console.log(fA(fB,'Hersain Lozada'));

//Funciones autoejecutables
const saludar4 = (function(){
    return `Hola ${p1}, ¿Cómo estás?`
})('Hersain LH');
console.log(saludar4);

//Funciones Clausuras
const incremen = (function () {
    let num=0;
    return function(){
        num++;
        return num;
    }
})();


const incremen = (function (){
    let num = 5;
    let Nombre = [];
    return function(Callbacks){
        let Guardar = function(p1){
            num++;
            Nombre.push(p1);
            return `Hola ${p1} ${num} como estas`;
        };
        let Ver = function(){
            return Nombre;
        };
        return eval(Callbacks);
        
    }
})();

console.log(incremen(`Guardar("Miguel");`));
console.log(incremen(`Guardar("Diana");`));
console.log(incremen(`Guardar("Wilmer");`));
console.log(incremen(`Guardar("Diego");`));
console.log(incremen(`Guardar("Adrianel");`));
console.log(incremen(`Ver();`));

//Funciones flecha - declaracion
let saludar1F = (p1) => `(Flecha) Hola ${p1}, ¿Cómo estás?`;
console.log(saludar1F('Hersain'));

let SaludarBasico = () => `Hola mundo`;
let SaludarUser1 = (p1) => `Hola ${p1} como estas`;
let SaludarUser2 = p1 => `Hola ${p1} como estas`;
let SaludarMaquina = (p1,p2) => `Hola ${p1} como estas te saluda ${p2}`;
let sumar = (num1,num2) => `${num1} + ${num2} = ${num1+num2}`


console.log(SaludarBasico());
console.log(SaludarUser1('Hersain1'));
console.log(SaludarUser2('Hersain2'));
console.log(SaludarMaquina("Hersain", "El PC"));
console.log(sumar(1,2));

//Clases => This
let lista = [
    function(){
        this.resultado = 5+3;
        return `Muestro el resultado `;
    },
];
// lista["name"] = "Miguel Angel castro";
console.log(lista[0]());
console.log(lista["resultado"]);

//Objetos y métodos
class Humano{
    constructor(nom,ape){
        this.nombre = nom;
        this.apellido = ape;
    }
    informacio(){
        return `Informacion completa ${this.nombre} ${this.apellido}`;
    }
    static ver(nom,ape){
        return `Informacion completa ${nom} ${ape}`;
    }
}
console.log(Humano.ver('Hersain', 'Lozada'));

//Otra manera
class Humano1{
    constructor(nom1,ape1){
        this.nombre1 = nom1;
        this.apellido1 = ape1;
    }
    infor1(nom1,ape1){
        return `Informacion full ${this.nombre1} ${nom1} ${this.apellido1} ${ape1}`;
    }
}
let obj = new Humano1('Hersain', 'Lozada');
console.log(obj.infor1('Julpau', 'HLH'));

//Otra manera más
class Animal{
    constructor(esp){
        this.especie = esp;
    }
    canino(){
        return `Dientes caninos de la especie ${this.especie}`;
    }
}

let objAni = new Animal('Pajarito');
console.log(objAni.canino());

class Humano2 extends Animal{
    constructor(nom2,ape2,esp2){
        super(esp2);
        this.nombre2 = nom2;
        this.apellido2 = ape2; 
    }
    informacio(nom2,ape2){
        return `Informacion completa ${this.nombre2} ${nom2} ${this.apellido2} ${ape2} ${this.canino()}`;
    }
    verdientes(){
        return this.canino();
    }
}


let objHum = new Humano2("Miguel", "Castro", "HUMANOS");
// console.log(objHum.informacio("Angel", "Escamilla"));
console.log(objHum.verdientes());

// objAni = new Animal("Humanos")
// console.log(objAni.canino());