function $(element) {
    return document.querySelector (element)
}

// VARIABLES DE INPUT TEXTO
const $inputTextoSuperior = $("#textoSuperior")
const $inputTextoInferior = $("#textoInferior")
const $sinTexto1 = $("#sinTextoSuperior")
const $sinTexto2 = $("#sinTextoInferior")
const $inputFuente = $("#familiaFuente")
const $inputUrl= $("#inputUrl")
const $inputFamilia = $("#familiaFuente")
const $inputTamañoFuente = $("#tamañoFuente")
const $inputAlinearTexto = $("#alinearTexto")
const $inputColorTexto = $("#colorTexto")
const $inputColorFondo = $("#colorFondo")

const $inputPading = $("#padingTexto")
const $inputTamañoLinea = $("#tamañoLinea")
const $inputFondoTransparente = $("#fondoTransparente")

// VARIABLES DE INPUT IMAGEN
const $inputOpacidad = $("#inputOpacidad")
const $inputContraste= $("#inputContraste")
const $inputDesenfoque = $("#inputDesenfoque")
const $inputEscalaDeGrises = $("#inputEscalaDeGrises")
const $inputSepia = $("#inputSepia")
const $inputHue = $("#inputHue")
const $inputSaturado = $("#inputSaturado")
const $inputNegativo = $("#inputNegativo")
const $inputBrillo = $("#inputBrillo");
const $contenido =$ ("#card"); 


// VARIABLES DE EN DONDE SE VAN A APLICAR LOS EVENTOS
const $h1Texto = $("#primerTexto")
const $h1SegundoTexto = $("#segundoTexto")
const $imagen = $("#imagenMeme");
const $cardTexto = $("#card")

// EVENTOS DEL TEXTO:
$inputTextoSuperior.addEventListener ("input", (e)  => {
    $h1Texto.innerText = e.target.value
})

$inputTextoInferior.addEventListener ("input", (e) => {
    $h1SegundoTexto.innerText = e.target.value
})


$sinTexto1.addEventListener("click", (e) => {
    if ($h1Texto.style.display === "none") {
        $h1Texto.style.display = "block";
    } else {
        $h1Texto.style.display = "none";
    }
});

 $sinTexto2.addEventListener ("click", () => {
     if ($h1SegundoTexto.style.display === "none") {
        $h1SegundoTexto.style.display = "block";
    } else {
        $h1SegundoTexto.style.display = "none";
    }
    })

$inputFuente.addEventListener ("input", (e) => {
    $h1Texto.style.fontFamily =  e.target.value;
     $h1Texto.style.fontFamily =  e.target.value
})

$inputUrl.addEventListener ("input", (e) => {
    $imagen.src = e.target.value;
    $imagen.style.maxWidth = "100%"; 
    $imagen.style.maxHeight = "100%"; 
    $imagen.style.objectFit = "contain"; })

$inputTamañoFuente.addEventListener ("input", () => {
    $h1Texto.style.fontSize = $inputTamañoFuente.value + "px";
    $h1SegundoTexto.style.fontSize = $inputTamañoFuente.value + "px";

})
$inputColorTexto.addEventListener("input", (e) => {
    $cardTexto.style.color = $inputColorTexto.value;
   })

$inputColorFondo.addEventListener ("input", () => {
    $h1Texto.style.backgroundColor = $inputColorFondo.value;
    $h1SegundoTexto.style.backgroundColor = $inputColorFondo.value
})

$inputAlinearTexto.addEventListener ("input", ( ) =>{
    $cardTexto.style.textAlign = $inputAlinearTexto.value
})

$inputFondoTransparente.addEventListener ("click", ( ) =>{
   $contenido.style.backgroundImage = `url(${ $inputUrl.value })`;
   
 })

$inputPading.addEventListener ("input", ( ) =>{ 
    $h1Texto.style.padding = `${$inputPading.value}px`;
    $h1SegundoTexto.style.padding =`${$inputPading.value}px`;
})
$inputTamañoLinea.addEventListener ("input", ( ) =>{ 
    $h1Texto.style.height = `${$inputTamañoLinea.value}px`;
    $h1SegundoTexto.style.height =`${$inputTamañoLinea.value}px`;
})

// EVENTOS DE IMAGEN:
$inputBrillo.addEventListener("input", () => {
    const aux = $contenido.style.filter ;
    $contenido.style.filter = `brightness(${$inputBrillo.value})`;
});

$inputOpacidad.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = `${aux} opacity(${$inputOpacidad.value})`;
});

$inputContraste.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = `${aux} contrast(${$inputContraste.value} %)`;
});

$inputDesenfoque.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = `${aux} blur(${ $inputDesenfoque.value }px)`;
});

$inputEscalaDeGrises.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = `${aux}  grayscale(${ $inputEscalaDeGrises.valu }%)`;
});

$inputSepia.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = `${aux} sepia(${ $inputSepia.value }%)`;
});


$inputHue.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = ` ${aux} hue-rotate(${ $inputHue.value }deg)`;
});

$inputSaturado.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = ` ${aux} saturate(${ $inputSaturado.value}%)`;
});

$inputNegativo.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = `${aux} invert(${ $inputNegativo.value})`;
});


// RESTABLECER VALORES DE IMAGEN Y TEXTO:
function restablecerValoresImagen() {
    $inputBrillo.value = 1;
    $contenido.style.filter = `brightness(1)`;
    $inputOpacidad.value = 1;
    $contenido.style.filter = `opacity(1)`;
    $inputContraste.value = "100%";
    $contenido.style.filter = `contrast(100%)`
    $inputDesenfoque.value = "0px";
    $contenido.style.filter = `blur(0px)`
    $inputEscalaDeGrises.value = 0;
    $contenido.style.filter = ` grayscale(0%)`
    $inputSepia.value = 0;
     $contenido.style.filter = ` sepia(0%)`
    $inputHue.value = 0;
    $contenido.style.filter = ` hue-rotation(0deg) `
    $inputSaturado.value = "100%";
    $contenido.style.filter = ` saturate(100%)`
    $inputNegativo.value = 1;
    $contenido.style.filter = `invert(0)`
}

function restablecerValoresTexto (){
    $inputTextoSuperior.value ="Escribi texto superior"  
    $h1Texto.innerText ="Escribi texto superior"
    $inputTextoInferior.value ="Escribir texto inferior"  
    $h1SegundoTexto.innerText = "Escribir texto inferior"  
    $sinTexto1.value =`block`   
    $h1Texto.style.display =`block`    
    $sinTexto2.value.display =`block`  
    $h1SegundoTexto.style.display =`block`
    $inputFuente.value =`Arial, Helvetica, sans-serif`   
    $h1Texto.style.fontFamily = `Arial, Helvetica, sans-serif`  
    $h1Texto.style.fontFamily =`Arial, Helvetica, sans-serif`   
    $inputUrl.value =``   
    $imagen.src = ``   
    $inputTamañoFuente.value =`15px`   
    $h1Texto.style.fontSize =`15px`   
    $h1SegundoTexto.style.fontSize =`15px`   
    $inputColorTexto.value =`black`   
    $cardTexto.style.color = `black`  
    $inputColorFondo.value =`gray`   
    $h1Texto.style.backgroundColor =`gray`   
    $h1SegundoTexto.style.backgroundColor =`gray`   
    $inputAlinearTexto.value =`center`   
    $cardTexto.style.textAlign = `center` 
    $inputPading.value = `30px`
    $h1Texto.style.padding = `30px`
    $h1SegundoTexto.style.padding =`30px`
    $inputTamañoLinea.value =`5px`
    $h1Texto.style.height = `5px`
    $h1SegundoTexto.style.height = `5px`


}
// EJECUCION DE FUNCION:
restablecerValoresImagen ();
restablecerValoresTexto();

// CREACION DE VARIABLES QUE VINCULAN A LOS BOTONES PARA REESTABLECER VALORES
const $restablecerImagen = $(".restablecerValoresImagen");
const $restablecerTexto = $(".restablecerValoresTexto");
// LE AGREGO EL EVENTO CLICK CON UNA FUNCION A LA CONSTANTE DEL BOTON
$restablecerImagen.addEventListener("click", restablecerValoresImagen);
$restablecerTexto.addEventListener("click", restablecerValoresTexto);



// botones del header:

const $buttonTexto = $("#botonTexto")
const $buttonImagen = $("#botonImagen")
const $editorDeTexto = $("#editorTexto")
const $editorDeImagen = $("#editorImagen")

//   probar boton que el cambie menu:

$buttonImagen.addEventListener ("click", (e) =>{
    $editorDeImagen.style.display = "block";
    $editorDeTexto.style.display= "none";
})
$buttonTexto.addEventListener ("click", (e) =>{
    $editorDeTexto.style.display = "block";
    $editorDeImagen.style.display = "none";

})
// MODO CLARO Y OSCURO
// DECLARACION DE CONSTANTES:

const $modoOscuro = $(".modoOscuro");
const $modoOscuroHeader = $(".modoOscuroHeader");
const $modoClaro = $(".modoClaro");
const $botonFondo = $("#botonColorFondo");
const $body= $("body");
const $imagenMeme = $(".imagen-meme")
const $header = $("header")
const $modoOscuroAside = $(".modoOscuroAside")
const $aside= $("aside")

// FUNCION PARA CAMBIO DE MODO 
function $cambioModoClaroOscuro () { 
    $body.classList.toggle("modoOscuro");
    $header.classList.toggle("modoOscuroHeader");
    $aside.classList.toggle("modoOscuroAside");
    $aside.classList.toggle("colorAside");
    if ($botonFondo.innerText === "Modo Claro") {
        $botonFondo.innerText = "Modo Oscuro";
         } else {
        $botonFondo.innerText = "Modo Claro";
    }
 }
//  EVENTO CLICK DEL BOTON AGREGANDOLE LA FUNCION
$botonFondo.addEventListener("click", $cambioModoClaroOscuro);



//   DESCARGAR MEME:

const $botonDescargarMeme= $("#botonDescargarMeme")

$botonDescargarMeme.addEventListener ("click", () => {
    domtoimage.toBlob($contenido).then((blob) => {
        saveAs(blob, "my-meme.png");
    });
})







    // cosas que faltan: imagenes/iconos de botones
    // ITEM TRANSPARENCIA
    //  HTML, MAIN
    // que el responsibe este bien en tamaño emobile, table y compu.
    // ORGANIZAR CSS


    // boton: reestablecer funciones? V
     // boton descargar meme V






    // ordenar js en funciones y ejecuciones 
 
   
