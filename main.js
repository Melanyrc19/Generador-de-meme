function $(element) {
    return document.querySelector (element)
}

const $inputTextoSuperior = $("#textoSuperior")
const $h1Texto = $("#primerTexto")

$inputTextoSuperior.addEventListener ("input", (e)  => {
$h1Texto.innerText = e.target.value
})

$h1Texto.style.color = "red";
$h1Texto.style.textAlign = "center";

const $inputTextoInferior = $("#textoInferior")
const $h1SegundoTexto = $("#segundoTexto")

$inputTextoInferior.addEventListener ("input", (e) => {
$h1SegundoTexto.innerText = e.target.value
})
$h1SegundoTexto.style.color = "red";
$h1SegundoTexto.style.textAlign = "center";


const $sinTexto1 = $ ("#sinTextoSuperior")

if ($sinTexto1) {  
    $sinTexto1.addEventListener("click", (e) => {
        $h1Texto.style.display = "none";  
    });
}

const $sinTexto2 = $ ("#sinTextoInferior")

if ($sinTexto2){
    $sinTexto2.addEventListener ("click", (e) => {
        $h1SegundoTexto.style.display = "none";
    })
}

const $inputFuente = $ ("#fuente")

$inputFuente.addEventListener ("input", (e) => {
$sinTexto1.innerText =  e.target.value;
$sinTexto2.innerText =  e.target.value
})

const $imagen = $("#imagenMeme");
const $inpurUrl= $("#inputUrl")

if ($inpurUrl){
$inpurUrl.addEventListener ("input", (e) => {
    $imagen.src = e.target.value});
    $imagen.style.maxWidth = "100%"; 
    $imagen.style.maxHeight = "100%"; 
    $imagen.style.objectFit = "contain"; 
}