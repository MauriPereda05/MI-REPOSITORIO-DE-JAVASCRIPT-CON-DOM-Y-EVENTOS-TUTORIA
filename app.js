const formElement = document.getElementById('Elementform');
const nameElement = document.getElementById('Name');
const emailElement = document.getElementById('Correo');
const passwordElement = document.getElementById('Contraseña');

formElement.addEventListener('submit', enviarDatos);

function enviarDatos(event) {
    event.preventDefault();

    const nombre = nameElement.value.trim();
    const correo = emailElement.value.trim();
    const contraseña = passwordElement.value.trim();

    if (nombre === '' && correo === '' && contraseña === '') {
        alert('Error: Por favor completa todos los campos.');
        return;
    }

    const datos = {
        usuario: nombre,
        email: correo,
        contraseña: contraseña
    };

    console.log('Datos enviados:', datos);

    limpiarCampos();
}

function limpiarCampos() {
    nameElement.value = '';
    emailElement.value = '';
    passwordElement.value = '';
}

