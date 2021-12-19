const lista=document.querySelector('#lista')

function programa(){
    //SELECCIONO EL OBJETO INPUT DEL DOM
    const input=document.querySelector("#paco")
    //COJO EL VALOR DEL INPUT (EL TEXTO QUE PONGO)
    //console.log(input.value)
    anadirTexto(input.value)
}

function anadirTexto(texto){
    //CREATE ELEMENT ME CREA UN ELEMENTO DE HTML (DIV, LI, TABLA, SELECT, OPTION...)
    let elemento=document.createElement("li")
    elemento.innerHTML=texto
    //METO A LISTA EL ELEMENTO QUE LE PASO
    lista.appendChild(elemento)
    //INNERHTML PARA ESCRIBIR
    //ME PASA EL OBJ BODY A TEXTO PLANO Y A ESE TEXTO LE AÑADO COSAS
   // document.body.innerHTML+=texto+"<br>"
}

function mostrarLista(){
    //console.log(lista)
    let nuevo=window.open("", "lista1", "width=800px, height=500px")
    nuevo.document.body.innerHTML+=lista.innerHTML;
}

