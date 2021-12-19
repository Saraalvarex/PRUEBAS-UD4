var preguntas=document.querySelectorAll('#pregunta')
    
let h1=document.querySelector('h1')
let div1=document.querySelector('.div2')

preguntas.forEach(function(pregunta) {
    const parrafo=document.createElement('p')
    let texto=pregunta.textContent
    parrafo.innerHTML+=texto
    parrafo.classList.add('rojo')
    h1.appendChild(parrafo)
});
 
function anadir(){
    
    let hijosDeDiv=div2.children
    
    let respuestas=document.querySelectorAll('input')
    respuestas.forEach(function (respu) {
            parrafo2=document.createElement('p')
            parrafo2.innerHTML+=respu.value
            console.log(parrafo2)
    }); 

    for (let i=0; i<hijosDeDiv.length; i++) {
       console.log(hijosDeDiv[i])
        hijosDeDiv[i].innerHTML+=parrafo2
       //hijosDeDiv[i].appendChild(respu)
   };

   //for (i in hijosDeDiv) { msgForIn = msgForIn + hijosDeDiv[i] + ' - '; }
   // console.log(array)
    /*
    let parrafo2
    let pregunts=document.querySelectorAll('.rojo')
    */
     /*
    pregunts.forEach(function (pregunta){
        let pUno=preguntas[0].lastElementChild
        pUno.innerHTML+=parrafo2
        console.log(pregunta)
        console.log(pUno)
    })*/
/*
let respuesta=respu.value
});*/
    //console.log(respuestas)
    //let primera=document.querySelector('.input').value     
}


