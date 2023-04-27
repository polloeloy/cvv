$(document).ready(function() {
    // on ready
 });
 
 
 async function iniciarSesion() {
   let datos = {};
   datos.email = document.getElementById('txtEmail').value;
   datos.password = document.getElementById('txtPassword').value;
 
   const request = await fetch('http://localhost:8080/usuario/api/user/login', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(datos)
   });
 
   const respuesta = await request.text();
   if (respuesta != 'false') {

    localStorage.token = respuesta;
    localStorage.email = datos.email;
     
     window.location.href = 'index.html'
   } else {
     alert("Las credenciales son incorrectas. Por favor intente nuevamente.");
   }
 
 }