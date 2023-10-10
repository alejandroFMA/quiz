console.log("Hello World");

const respuestasCorrectas = {
    pregunta1: "frodo",
    pregunta2:"elgris",
    pregunta3:"amigo",
    pregunta4:"smeagol",
    pregunta5:"trancos",
    pregunta6:"cabellos",
    pregunta7:"pie",
    pregunta8:"lee",
    pregunta9:"tyler",
    pregunta10:"mili"

}


/*let imagenInput = document.getElementsByClassName("merry");

imagenInput.addEventListener("click", (event)=> {
  
    let imagenes = document.querySelectorAll('img');
    imagenes.forEach((imagen) => {imagen.classList.remove('oculto'); })
       
})*/


let validarRespuestas= document.querySelector("button");
let totalAciertos= 0
validarRespuestas.style.backgroundColor="white";


validarRespuestas.addEventListener("click", (event) => {
    
    event.preventDefault();

    let respuestasElement = document.querySelectorAll('input:checked'); //eleccion usuario
    for (let i = 0; i < respuestasElement.length; i++) {  //iteracion por todos los inputs
        let respuesta = respuestasElement[i];
        let labelElement = document.querySelector(`label[for=${respuesta.id}]`);
        /*if (respuestaElement.length === 0) {
            alert("¡Debes responder a todas las preguntas!");
        }*/

        if (respuesta.value == respuestasCorrectas[respuesta.name]) { //condicional. respuestas[name] == pregunta1,2,3...pero más general
            labelElement.style.backgroundColor = "green";
            labelElement.style.color = "black"
            console.log("¡Respuesta correcta!");
            ++totalAciertos;
        } else {
            labelElement.style.backgroundColor = "red";
            labelElement.style.color = "black";
            console.log("¡Respuesta incorrecta!");
        }

    } 

    let h4 = document.createElement("h4")
    let result = document.createTextNode(`Has tenido un total de ${totalAciertos} acierto/s`);
    h4.style.color = "white";
    h4.style.fontSize = "28px";
    h4.style.backgroundColor="black";

    h4.appendChild(result);
    document.getElementById("resultados").appendChild(h4)
    let imagenes = document.querySelectorAll('img');
    imagenes.forEach((imagen) => {imagen.classList.remove('oculto'); })

})  







    






   












