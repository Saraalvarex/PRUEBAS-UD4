//IR PROBANDO COSAS EN CONSOLA Y METER CADA COSA EN ARRAY
/*
function anadirElemento() {

    const texto = document.querySelector("#input").value
    let ul = document.querySelector(".ul")
    let li = document.createElement('li')
    li.innerHTML+=texto
    ul.appendChild(li)

}
*/

let arroList=[]
function anadirElementoArray(){
    const texto = document.querySelector("#input").value
    arroList.push(texto)
    
    arroList.sort();
    anadirElemento()
    //console.log(arroList)
}

function anadirElemento() {
    const texto = document.querySelector("#input").value
    let ul = document.querySelector(".ul")
    //let li = document.createElement('li')
    ul.innerHTML = ""
    arroList.forEach((element) => {
        let li = document.createElement('li')
        li.innerHTML+=element
        ul.appendChild(li)
        console.log(element)
    });
}


/*function borrarElemento(){
    arroList.forEach(element => {
        arroList.splice(element)
    });
}*/
