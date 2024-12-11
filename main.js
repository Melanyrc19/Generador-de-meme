function $(element) {
    return document.querySelector (element)
}

const $inputTextoSuperior = $("#textoSuperior")
const $inputTextoInferior = $("#textoInferior")

const $sinTexto1 = $ ("#sinTextoSuperior")
const $sinTexto2 = $ ("#sinTextoInferior")
const $inputFuente = $ ("#fuente")
const $inpurUrl= $("#inputUrl")
const $inputFamilia = $ ("#familiaFuente")
const $inputTamañoFuente = $ ("#tamañoFuente")
const $inputAlinearTexto = $ ("#alinearTexto")
// const $inpurOptionIzquierda = $ ("#textoIzquieda")
// const $inpurOptionCentro = $ ("#textoCentro")
// const $inpurOptionDerecha = $ ("#textoDerecha")
const $inputColorTexto = $ ("#colorTexto")
const $inputColorFondo = $ ("#colorFondo")
const $inputTransparente = $("#fondoTransparente")
const $inputPading = $ ("#padingTexto")
const $inputTamañoLinea = $ ("#tamañoLinea")

const $h1Texto = $("#primerTexto")
const $h1SegundoTexto = $("#segundoTexto")
const $imagen = $("#imagenMeme");
const $cardTexto = ("#card")

$inputTextoSuperior.addEventListener ("input", (e)  => {
$h1Texto.innerText = e.target.value
})

$inputTextoInferior.addEventListener ("input", (e) => {
$h1SegundoTexto.innerText = e.target.value
})

if ($sinTexto1) {  
    $sinTexto1.addEventListener("click", (e) => {
        $h1Texto.style.display = "none";  
    });
}


if ($sinTexto2){
    $sinTexto2.addEventListener ("click", (e) => {
        $h1SegundoTexto.style.display = "none";
    })
}


$inputFuente.addEventListener ("input", (e) => {
$sinTexto1.innerText =  e.target.value;
$sinTexto2.innerText =  e.target.value
})

if ($inpurUrl){
$inpurUrl.addEventListener ("input", (e) => {
    $imagen.src = e.target.value});
    $imagen.style.maxWidth = "100%"; 
    $imagen.style.maxHeight = "100%"; 
    $imagen.style.objectFit = "contain"; 
}

$inputTamañoFuente.addEventListener ("input", () => {
    $h1Texto.style.fontZise = $inputTamañoFuente.value;
    $h1SegundoTexto.style.fontZise = $inputTamañoFuente.value;

})


$inputColorTexto.addEventListener("input", () => {
    $h1Texto.style.color = $inputColorTexto.value;
    $h1SegundoTexto.style.color = $inputColorTexto.value
})

$inputColorFondo.addEventListener ("input", () => {
    $h1Texto.style.backgroundColor = $inputColorFondo.value;
    $h1SegundoTexto.style.backgroundColor = $inputColorFondo.value
})

$inputAlinearTexto.addEventListener ("input", ( ) =>{
    $cardTexto.style.textAlign = $inputAlinearTexto.value
})





