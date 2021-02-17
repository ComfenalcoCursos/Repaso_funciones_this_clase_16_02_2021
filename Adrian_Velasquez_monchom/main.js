
// class Animal{
//     constructor(esp){
//         this.especie = esp;
//     }
//     canino(){
//         return `Dientes caninos de la especie ${this.especie}`;
//     }
// }

// let objAni = new Animal("Pajaros");
// console.log(objAni.canino());

// class Humano extends Animal{
//     constructor(nom,ape,esp){
//         super(esp);
//         this.nombre = nom;
//         this.apellido = ape; 
//     }
//     informacio(nom,ape){
//         return `Informacion completa ${this.nombre} ${nom} ${this.apellido} ${ape} ${this.canino()}`;
//     }
//     verdientes(){
//         return this.canino();
//     }
// }


// let objHum = new Humano("Miguel", "Castro", "HUMANOS");
// // console.log(objHum.informacio("Angel", "Escamilla"));
// console.log(objHum.verdientes());

// objAni = new Animal("Humanos")
// console.log(objAni.canino());



//Uso de this

// let lista = [
//     function(){
//         return this;
//     }
// ];
// // lista["name"] = "Miguel Angel castro";
// console.log(lista);


// let lista = [
//     function(){
//         this.resultado = 5+3;
//         return `Este es el resulatado `;
//     },

    
// ];
// // lista["name"] = "Miguel Angel castro";
// console.log(lista[0]());
// console.log(lista["resultado"]);
e


// Funciones flechas

// let SaludarUsuario = () => `Hola mundo`;
// let SaludarParentesis = (p1) => `Hola ${p1} como estas`;
// let SaludarSinParentesis = p1 => `Hola ${p1} como estas`;
// let SaludarMaquina = (p1,p2) => `Hola ${p1} como estas te saluda ${p2}`;
// let Sumar = (num1,num2) => `${num1} + ${num2} = ${num1+num2}`;
// let Extendida = (num1,num2) => {
//     return `${num1} + ${num2} = ${num1+num2}`
// };

// console.log(SaludarParentesis("Miguel"));
// console.log(SaludarSinParentesis("Miguel"));
// console.log(SaludarUsuario());
// console.log(SaludarMaquina("Miguel Angel", "Siri"));
// console.log(Sumar(5,6));
// console.log(Extendida(15,20));



// Funciones declaración

// function Saludar(p1){
//     return `Hola ${p1} como estas`;
// }
// console.log(Saludar("Miguel"));


// Funciones expresión

// let Saludar = function(p1){
//     return `Hola ${p1} como estas`;
// }
// console.log(Saludar("Angel"));


// Funciones anónimas 

// let Saludar = function(p1="Castro"){
//     return `Hola ${p1} como estas`;
// }
// console.log(Saludar);
// console.log(Saludar());


// Funciones Callbacks 

// const fB = function(arg){
//     return `Hola ${arg} como estas`;
// }
// const fA = function(Callbacks, p1){
//     parar:
//     do{
//         const i = ~~(Math.trunc(Math.random() *5));
//         if(i==3){
//             return Callbacks(p1);
//         }else{
//             console.count();
//             continue parar;
//         }
//     }while(true)
// }

// console.log(fA(fB, "Miguel Angel Castro"));



// Funciones autoejecutables 

// const Saludar = (function(p1){
//     return `Hola ${p1} como estas`;
// })("Miguel Angel");

// console.log(Saludar);


// Funciones Clausuras 

// const incremen = (function (){
//     let num = 5;
//     let Nombre = [];
//     return function(Callbacks){
//         let Guardar = function(p1){
//             num++;
//             Nombre.push(p1);
//             return `Hola ${p1} ${num} como estas`;
//         };
//         let Ver = function(){
//             return Nombre;
//         };
//         return eval(Callbacks);
        
//     }
// })();

// console.log(incremen(`Guardar("Miguel");`));
// console.log(incremen(`Guardar("Diana");`));
// console.log(incremen(`Guardar("Wilmer");`));
// console.log(incremen(`Guardar("Diego");`));
// console.log(incremen(`Guardar("Adrianel");`));
// console.log(incremen(`Ver();`));
