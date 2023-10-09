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

let validarRespuestas= document.querySelector("button");
let totalAciertos= 0
validarRespuestas.style.backgroundColor="white";


validarRespuestas.addEventListener("click", (event) => {
    
    event.preventDefault();

    let respuestaElement = document.querySelectorAll('input:checked'); //eleccion usuario
    for (let i = 0; i < respuestaElement.length; i++) {  //iteracion por todos los inputs
        let respuesta = respuestaElement[i];
        let labelElement = document.querySelector(`label[for=${respuesta.id}]`);
    
        //if (respuestaElement.length !== respuestasCorrectas.length) {
            //alert("¡Debes responder a todas las preguntas!");
        //}

        if (respuesta.value == respuestasCorrectas[respuesta.name]) { //condicional. respuestas[name] == pregunta1,2,3...pero más general
            labelElement.style.backgroundColor = "green";
            labelElement.style.color = "white"
            console.log("¡Respuesta correcta!");
            ++totalAciertos;
        } else {
            labelElement.style.backgroundColor = "red";
            labelElement.style.color = "white";
            console.log("¡Respuesta incorrecta!");
        }

    } 
    
    let imagenes = document.querySelectorAll('img');

    imagenes.forEach((imagen) => {
        imagen.classList.remove('oculto');
    })
    alert(`Has tenido un total de ${totalAciertos} aciertos`)
})  








    






   












