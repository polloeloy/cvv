const formulario = document.querySelector('#formreg');

formulario.addEventListener('submit', e => {
  e.preventDefault();

  const datos = {
    nombre: document.querySelector('#txtNombre').value,
    apellido: document.querySelector('#txtApellido').value,
    email: document.querySelector('#txtEmail').value,
    password: document.querySelector('#txtPassword').value
  };
   let repetirPassword = document.querySelector('#txtRepetirPassword').value;
  // Comprobar que los campos 1 y 2 son iguales
  if (datos.password !== repetirPassword) {
    alert('Las contraseñas deben ser iguales');
    return;
  }

  // Enviar los datos al servidor
  fetch('http://localhost:8080/usuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(response => {
    if (response.ok) {
      alert('Los datos se guardaron correctamente');
      // Redirigir a otra página
      window.location.assign("login.html");
      
    }

    return response.json();
    
  })
  .then(jsonw => {
    if(jsonw.mensaje){
    alert(jsonw.mensaje);
    }

  })
});