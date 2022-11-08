//CONTROLANDO ETIQUETAS CON EL DON


//1.ALMACENAR EN MEMORIA (CREAR UNA VARIABLE)
//LA ETIQUETA QUE QUIERO CONTROLAR 
let etiquetaImagen=document.getElementById("fotografia")
console.log(etiquetaImagen)

//2. CONTROLANDO NUESTRAS ETIQUETAS

//2.1 CONTROLAR ES CAMBIAR LA FUENTES (SRC) DE UNA ETIQUETA
etiquetaImagen.src="./img/pain1.png"

//2.2 CONTROLAR ES CAMBIAR CONTENIDO DE TEXTO DE UNA ETIQUETA
let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="HISTORIA"

//2.3 CONTROLAR ES AGREGAR ESTILOS
etiquetaTitulo.classList.add('fuente','alineado')

// 2.4 CONTROLAR ES REMOVER ESTILOS
let etiquetaParrafo=document.getElementById("parrafo")
etiquetaParrafo.classList.remove('text-danger')

//2.5 CONTROLAR ES DETECTAR EVENTOS

let etiquetaBoton=document.getElementById('boton')
etiquetaBoton.addEventListener("click",function(evento){
    alert("estamos haciendo clic")
})