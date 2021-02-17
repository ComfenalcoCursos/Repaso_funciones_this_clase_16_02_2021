// Funciones flechas
// let SaludarUsuario = () => `Hola mundo`;
// let SaludarParentesis = (p1) => `Hola ${p1} como estas`;
// let SaludarSinParentesis = p1 => `Hola ${p1} como estas`;
// let SaludarMaquina = (p1,p2) => `Hola ${p1} como estas te saluda ${p2}`;
// let Sumar = (num1,num2) => `${num1} + ${num2} = ${num1+num2}`;
// let Extendida = (num1,num2) => {
//     return `${num1} + ${num2} = ${num1+num2}`
// };

// console.log(SaludarParentesis("Emmanuel"));
// console.log(SaludarSinParentesis("Emmanuel"));
// console.log(SaludarUsuario());
// console.log(SaludarMaquina("Santiago Forero", "Cortana"));
// console.log(Sumar(5,6));
// console.log(Extendida(15,20));


// Funciones declaración

// function Saludar(p1){
//     return `Hola ${p1} como estas`;
// }
// console.log(Saludar("Emmanuel"));


// Funciones expresión

// let Saludar = function(p1){
//     return `Hola ${p1} como estas`;
// }
// console.log(Saludar("Emmanuel"));


// Funciones anónimas 

// let Saludar = function(p1="amigo"){
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

// console.log(fA(fB, "Emmanuel Santiago Forero"));



// Funciones autoejecutables 

// const Saludar = (function(p1){
//     return `Hola ${p1} como estas`;
// })("Emmanuel");

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



let lista = [
    function(){
        this.resultado = (1500000000*22)/350;
        return `Resultado de la inversion`;
    },

    
];
// lista["name"] = "Miguel Angel castro";
console.log(lista[0]());
console.log(lista["Resultado"]);


