console.log("Hello World");

const respuestasCorrectas = {
    pregunta1: "frodo",
    pregunta2: "elgris",
    pregunta3: "amigo",
    pregunta4: "smeagol",
    pregunta5: "trancos",
    pregunta6: "cabellos",
    pregunta7: "pie",
    pregunta8: "lee",
    pregunta9: "tyler",
    pregunta10: "mili"
}

let validarRespuestas = document.querySelector("button");
let totalAciertos = 0;
validarRespuestas.style.backgroundColor = "white";

validarRespuestas.addEventListener("click", (event) => {
    event.preventDefault();

    let respuestasUsuario = document.querySelectorAll('input:checked');

    if (respuestasUsuario.length !== Object.keys(respuestasCorrectas).length) {
        alert("¡Debes responder a todas las preguntas!");
        return; //alerta si numero de respuesas no es igual que numero repsuestas objeto
    }

    for (let i = 0; i < respuestasUsuario.length; i++) {
        let respuesta = respuestasUsuario[i];
        let etiqueta = document.querySelector(`label[for=${respuesta.id}]`);

        if (respuesta.value === respuestasCorrectas[respuesta.name]) {
            etiqueta.style.backgroundColor = "green";
            etiqueta.style.color = "black";
            console.log("¡Respuesta correcta!");
            totalAciertos++;
        } else {
            etiqueta.style.backgroundColor = "red";
            etiqueta.style.color = "black";
            console.log("¡Respuesta incorrecta!");
        }
    }

    let h4 = document.createElement("h4");
    let result = document.createTextNode(`Has acertado un total de: ${totalAciertos}`);
    h4.style.color = "white";
    h4.style.fontSize = "28px";

    h4.appendChild(result);
    document.getElementById("resultados").appendChild(h4);

    let imagenes = document.querySelectorAll('img');
    imagenes.forEach((imagen) => {
        imagen.classList.remove('oculto');
    });
});








    






   












