let cerrar = document.querySelector('.close');
let abrir = document.querySelector('.cta');
let modal = document.querySelector('.modal');
let modalC = document.querySelector('.modal-container');

abrir.addEventListener('click', function(e){
    e.preventDefault();

    modalC.style.opacity ="1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close")
})

cerrar.addEventListener('click', function(e){
    e.preventDefault();
    setTimeout(function(){
        modalC.style.opacity ="0";
        modalC.style.visibility = "hidden";
    },900)
})

let cerrarFormulario = document.querySelector('.cerrarFormulario');
let abrirFormulario = document.querySelector('#btnAgregar');
let modalFormulario = document.querySelector('.modalFormulario');
let modalCFormulario = document.querySelector('.modal-container-formulario');

abrirFormulario.addEventListener('click', function(e){
    e.preventDefault();

    modalCFormulario.style.opacity ="1";
    modalCFormulario.style.visibility = "visible";
    modalFormulario.classList.toggle("modalFormulario-cerrar")
})

cerrarFormulario.addEventListener('click', function(e){
    e.preventDefault();
    setTimeout(function(){
        modalCFormulario.style.opacity ="0";
        modalCFormulario.style.visibility = "hidden";
    },900)
})
