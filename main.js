function $(element) {
    return document.querySelector (element)
}

// aqui empienzan las funciones de los inputs
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
const $inputTransparente = $("#fondoTransparente")
const $inputPading = $("#padingTexto")
const $inputTamañoLinea = $("#tamañoLinea")

const $h1Texto = $("#primerTexto")
const $h1SegundoTexto = $("#segundoTexto")
const $imagen = $("#imagenMeme");
const $cardTexto = $("#card")

$inputTextoSuperior.addEventListener ("input", (e)  => {
    $h1Texto.innerText = e.target.value
})

$inputTextoInferior.addEventListener ("input", (e) => {
    $h1SegundoTexto.innerText = e.target.value
})


$sinTexto1.addEventListener("click", (e) => {
    $h1Texto.style.display = "none";  
});




 $sinTexto2.addEventListener ("click", () => {
    $h1SegundoTexto.style.display = "none";
    })



$inputFuente.addEventListener ("input", (e) => {
    $h1Texto.style.fontFamily =  e.target.value;
    $h1SegundoTexto.style.fontFamily =  e.target.value
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

// botonImage
// botonTexto



// editorTexto editorImagen
const $buttonTexto = $("#botonTexto")
const $buttonImagen = $("#botonImagen")
const $editorDeTexto = $("#editorTexto")
const $editorDeImagen = $("#editorImagen")




//   probar boton que cambie menu:

    $buttonImagen.addEventListener ("click", (e) =>{
        $editorDeImagen.style.display = "block";
        $editorDeTexto.style.display= "none";

    })
    $buttonTexto.addEventListener ("click", (e) =>{
        $editorDeTexto.style.display = "block";
        $editorDeImagen.style.display = "none";

    })
// modo claro y oscuro:

const $modoOscuro = $(".modoOscuro");
const $modoOscuroHeader = $(".modoOscuroHeader");
const $modoClaro = $(".modoClaro");
const $botonFondo = $("#botonColorFondo");
const $body= $("body");
const $imagenMeme = $(".imagen-meme")
const $header = $("header")
const $modoOscuroAside = $(".modoOscuroAside")
const $aside= $("aside")
const $botonDescargarMeme= $("#botonDescargarMeme")




    $botonFondo.addEventListener("click", (e) => { 
      $body.classList.toggle("modoOscuro");
      $header.classList.toggle("modoOscuroHeader");
      $aside.classList.toggle("modoOscuroAside");
      $aside.classList.toggle("colorAside");
      
    })


// EVENTOS DE TEXTO:


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



$inputBrillo.addEventListener("input", () => {
    const aux = $contenido.style.filter ;
    $contenido.style.filter = `brightness(${ $inputBrillo.value })`;
});
$inputOpacidad.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = `${aux} opacity(${ $inputOpacidad.value })`;
});
$inputContraste.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = `${aux}  contrast(${ $inputContraste.value })`;
});
$inputDesenfoque.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = `${aux} blur(${ $inputDesenfoque.value })`;
});
$inputEscalaDeGrises.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = `${aux}  grayscale(${ $inputEscalaDeGrises.value })`;
});
$inputSepia.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = `${aux} sepia(${ $inputSepia.value })`;
});
$inputHue.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = ` ${aux} hue-rotation(${ $inputHue.value })`;
});
$inputSaturado.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = ` ${aux} saturation(${ $inputSaturado.value })`;
});
$inputNegativo.addEventListener("input", () => {
    const aux = $contenido.style.filter;
    $contenido.style.filter = `${aux} invert(${ $inputNegativo.value })`;
});


//  function filtros (){
//     const filtros =
//     brillo($ {$inputBrillo})
//      ${opacidad} 
//      ${contraste} 
//      ${desenfoque}  
//      ${grises} 
//      ${sepia} 
//      ${hue}  
//      ${saturado} 
//      ${negativos}


// }

// restablecer valores:

function restablecerValores() {
    let filtro = 'brightness(1) opacity(1) contrast(100%) blur(0px) grayscale(0%) sepia(0%) hue-rotation(0deg) saturate(100%) invert(1)';
    $contenido.style.filter = filtro;
    $inputBrillo.value = 1;
    $inputOpacidad.value = 1;
    $inputContraste.value = 100;
    $inputDesenfoque.value = 0;
    $inputEscalaDeGrises.value = 0;
    $inputSepia.value = 0;
    $inputHue.value = 0;
    $inputSaturado.value = 100;
    $inputNegativo.value = 1;
}
restablecerValores ();

const $restablecer = $(".restablecerValoresMeme");


$restablecer.addEventListener("click", restablecerValores);








  

    // cosas que faltan: imagenes/iconos de botones
    // terminar todos los items y hacer que no se sobre-escriban al ponerlos
    // boton: reestablecer funciones?
    // ordenar js en funciones y ejecuciones
    // que el responsibe este bien en tamaño emobile, table y compu.
    // boton descargar meme
