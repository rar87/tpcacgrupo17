var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var fn = document.getElementById('fn');
var edad = document.getElementById('edad');
var genero = document.getElementById('genero');
var mail = document.getElementById('mail');
var tel = document.getElementById('tel');
var error = document.getElementById('error');
error.style.color = 'red';



function enviarformulario(){
var mensajesError = [];

if(nombre.value === null || nombre.value === '' ){
    mensajesError.push('Ingresa tu nombre');
    
}
if(apellido.value === null || apellido.value === '' ){
    mensajesError.push('Ingresa tu apellido');
    
}
if(fn.value === null || fn.value === '' ){
    mensajesError.push('Ingresa tu Fecha de nacimiento');
    
}
if(edad.value === null || edad.value === '' ){
    mensajesError.push('Ingresa tu edad');
    
}
if(genero.value === null || genero.value === '' ){
    mensajesError.push('Ingresa tu Genero');
    
}
if(tel.value === null || tel.value === '' ){
    mensajesError.push('Ingresa tu Numero de telefono');
    
}

error.innerhtml = mensajesError.join(',');


}
