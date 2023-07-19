console.log ("hola uwu")
// español
let who1 = ['El perro', 'Mi abuela', 'Su tortuga', 'Mi pájaro'];
let action1 = ['comió', 'meó', 'aplastó', 'rompió'];
let what1 = ['mi tarea', 'las llaves', 'el carro'];
let when1 = ['antes de la clase', 'justo a tiempo', 'cuando terminé', 'durante mi almuerzo', 'mientras oraba'];

//ingles
let who2 = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action2 = ['ate', 'peed', 'crushed', 'broke'];
let what2 = ['my homework', 'the keys', 'the car'];
let when2 = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

//Objetos
const lengujues = {
//objeto arrays
    Ingles:{
        
        who    :['The dog', 'My grandma', 'His turtle', 'My bird'],
        action :['ate', 'peed', 'crushed', 'broke'],
        what   :['my homework', 'the keys', 'the car'],
        when   :['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'],

    },
//objeto arrays
    Español:{
        
        quien  :['El perro', 'Mi abuela', 'Su tortuga', 'Mi pájaro'],
        accion :['comió', 'meó', 'aplastó', 'rompió'],
        que    :['mi tarea', 'las llaves', 'el carro'],
        cuando :['antes de la clase', 'justo a tiempo', 'cuando terminé', 'durante mi almuerzo', 'mientras oraba']
    }

}

const Pagina_español = document.getElementById("es")
//Funcion para cambiar el valor del value del boton "boton" a "Español"
function es(){

    let valor = document.getElementById("boton")
    valor.value = "Español"

}


const Pagina_Ingles = document.getElementById("en")
//Funcion para vambiar el valor del value del boton "boton" a "Ingles"
function en(){

    let valor = document.getElementById("boton")
    valor.value = "Ingles"
   
}

//funcion para crear la escusa en el idioma elejido
function cambiar (){

    const butom_idioma = document.getElementById ("boton")
    console.log(butom_idioma.value)
    //si el idioma es español se realizara la siguiente logica:
    if (butom_idioma.value==="Ingles") {
        console.log("es inglesh")
        //math.random cra un numero al azar y Math.floor lo redondea a un entero
        let whonr    = Math.floor(Math.random()*(4 - 0 )+ 0);
        let actionnr = Math.floor(Math.random()*(4 - 0 )+ 0);
        let whatnr   = Math.floor(Math.random()*(3 - 0 )+ 0);
        let whennr   = Math.floor(Math.random()*(5 - 0 )+ 0);
        //se concatena el mensaje y se almacena en la variable
        let escusa =  lengujues.Ingles.who[whonr] + " " + lengujues.Ingles.action[actionnr] + " " + lengujues.Ingles.what[whatnr] + " " + lengujues.Ingles.when[whennr]  
        return escusa;
    //si el idioma es español se ejecutara la siguiente logica:
    } else if(butom_idioma.value==="Español"){
       
        let quiennr  = Math.floor(Math.random()*(4 - 0 )+ 0);
        let accionnr = Math.floor(Math.random()*(4 - 0 )+ 0);
        let quenr    = Math.floor(Math.random()*(3 - 0 )+ 0);
        let cuandonr = Math.floor(Math.random()*(5 - 0 )+ 0);

        let escusa =  lengujues.Español.quien[quiennr] + " " + lengujues.Español.accion[accionnr] + " " + lengujues.Español.que[quenr] + " " + lengujues.Español.cuando[cuandonr]   

        return escusa;
    }

    
}



const boton = document.getElementById("boton")
//funcion encargada de carcar la escusa en el parrafo "escus"
function render (){
    console.log ("este sech")
    const resultado = cambiar() 
    return document.getElementById("escus").innerHTML = resultado;
    
    
}



