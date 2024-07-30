
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

document.querySelector("#boton2").addEventListener("click", () => {
    // Captura el contenido del área de texto
    const contenidoTextarea = document.querySelector("#texto-izquierdo").value;
    // Llama a la función copiar con el contenido capturado
    desencriptar('p', contenidoTextarea);
    document.querySelector("#mi-imagen").style.display = "none";
    document.querySelector("#boton3").style.display = "block"; 
});

function copiar(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
  
        // Reemplazar las letras según las reglas
        const encriptado = texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        
        elementoHTML.innerHTML = encriptado;
        return encriptado;
    
}

function desencriptar(elemento, texto){
    alert("paso por aca");
    let elementoHTML = document.querySelector(elemento);
    //let elementoHTML = document.querySelector("#texto-izquierdo").value;
    //const desencriptado = elementoHTML
    const desencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    elementoHTML.innerHTML = desencriptado;
console.log(desencriptado);
return desencriptado;
}

function copiarTexto(){

    const texto = document.getElementById("parrafo");
    const tmp = document.createElement("input");
    tmp.value = texto.textContent;
    document.body.appendChild(tmp);

    tmp.select();
    document.execCommand("copy");

    document.body.removeChild(tmp);
    alert("Texto Copiado:" + texto.textContent);
}

