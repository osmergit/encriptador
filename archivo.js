
const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e =>{
    textarea.style.height = "63px";
    let alto = e.target.scrollHeight;
    console.log(alto);
    textarea.style.height = `${alto}px`;
});
document.querySelector("#boton3").style.display = "none";
document.querySelector("#boton1").addEventListener("click", () => {
    // Captura el contenido del área de texto
    const contenidoTextarea = document.querySelector("#texto-izquierdo").value;
    // Llama a la función copiar con el contenido capturado
    copiar('p', contenidoTextarea);
    document.querySelector("#mi-imagen").style.display = "none";
    document.querySelector("#boton3").style.display = "block"; 
});

function copiar(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

console.log("PAso por aca");