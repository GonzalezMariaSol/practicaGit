//switch = una de las maneras de evaluar condiciones en Js

// Quiero devolver el nombre del dia de las semana
/*const diaDeLaSemana = parseInt(prompt("ingrese un numero del 0 al 6:",0))
 switch (diaDeLaSemana) {
    case 0:
        alert("Lues")
        break;
    case 1:
        alert("Martes")
        break;
    case 2:
        console.log("Miercoles")
        break;
    case 3:
        alert("Jueves")
        break;
    case 4:
        alert("Viernes")
        break;
    case 5:
        alert("Sabado")
        break;
    case 6:
        alert("Domingo")
        break;
    default: 
        console.log("no existe un dia de la semana para ese numero")
        break;
 } 
*/

//Operador Ternario
//es una manera corta y sencilla de escribir un if sencillo
//sencillo = no puedo poner mas de dos resultados, el si pasa esto.... y el sino...

// const numeritos = 5                                 //usamos const para numeritos y para day porque son datos que 
// const day = parseInt(prompt("ingrese un dia"),0)    //NO van a variar, numeritos lo indicamos nosotros 5 y day lo va a indicar
// let respuesta                                     //el usuario. PERO respuesta le pusimos let, porque este si va a variar
//                                                 //dependiendo que es lo que ponga el usuario y si matchea con el numero 5 o no 
// if (day > 5){                                   //es que la respuesta va a variar
//     respuesta="el dia es mayor a 5"
// }else{
//     respuesta="el dia es menor o igual a 5"
// }
// console.log(respuesta)

//este mismo codigo pero aplicando operador alternario

/*const numerito = 5
const dia = parseInt(prompt("ingrese un dia"),0)
let respuesta


//condicion ? pasa esto : (sino) pasa esto otro
dia > numerito  ? respuesta = "el dia es mayor a 5" : respuesta = "el dia es menor o igual a 5"

console.log(respuesta)
*/


/*const aceptarTerminosYCondiciones = (confirmacion) => {
    const terminosYCondiciones = confirm ("aceptas los terminos y condiciones?")
    return confirmacion?true:false
}

console.log(aceptarTerminosYCondiciones())

//otros ejemplos  (son todos lo mismo)

const sumas = (a,b) => {
    const resultado = a + b
    return resultado > 0 ? "es positivo" : "es negativo" 
} //retornar si (?) resultado es mayor a 0 "es positivo" sino (:) "es negativo"
   ...............................   
const sumas = (a,b) => {
    const resultado = a + b
    if (resultado > 0) return true
    return false
}

//return implicito -solo aplica para cuando queres retornar SOLO UNA LINEA, si quisieras mas, deberias usar mas llaves-

const sumas = (a,b) => a + b


console.log(sumas(5,5))
console.log(sumas(-2,7))
console.log(sumas(-10,-5))
*/


