# Practica de Javascript - DOM y EVENTOS

## Creacion de un registro de cuenta 

En mi HTML presenta un formulario que solicita al usuario ingresar su nombre,correo electronico y contraseña. Una vez que el usuario completa los campos y hace clic en el botón "Registrate" se envian los datos al servidor para el registro. La página también incluye iconos de las redes sociales Instagram,LinkedIn y Facebook.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/80bb02810b.js" crossorigin="anonymous"></script>
    <title>Document</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <div class="container">
        <section>
            <h1>Crear una cuenta</h1>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-facebook"></i>
            <p>Crea una cuenta gratis</p>

        <form id="Elementform">
            <div>
                <label for="Name"></label>
                <input type="text" id="Name" placeholder="Nombre" />
            </div>

            <div>
                <label for="Correo"></label>
                <input type="email" id="Correo" placeholder="Email" />
            </div>

            <div>
                <label for="Contraseña"></label>
                <input type="password" id="Contraseña" placeholder="Contraseña" />
            </div>

            <button type="submit">Registrate</button>
        </form>
        </section>
    </div>

    <script src="app.js"></script>
</body>
</html>
```

## Estilo usados en el registro de cuenta 

En mi CSS define el estilo visual de una página web de inicio de sesión o registro. La imagen de fondo muestra un hermoso paisaje. El formulario de registro esta contenido en un area con fondo semitransparente con un diseño limpio y moderno. Los titulos y el texto estan en color blanco y en negrita para destacar sobre el fondo oscuro y los campos de entrada tienen una linea inferior blanca y un diseño centrado. El botón de registro tiene un estilo minimalista con un efecto de cambio de color al pasar el cursor sobre el.

![App Screenshot](image.png)

## Funcionalidad de Registro y Validación de Formulario

En mi JavaScript se encarga mi formulario de registro. Al capturar el evento de envío del formulario previene su comportamiento predeterminado de enviar los datos a la consola y realiza una validación de los campos. Si alguno de los campos (nombre,correo electrónico o contraseña) estan vacio muestra una alerta de error pidiendo al usuario que complete todos los campos. Si todos los campos están completos recopila los datos del formulario en un objeto y los muestra en la consola del navegador. Luego limpia los campos del formulario para una nueva entrada de datos.

```javascript
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

```

## Authors

- [@Mauricio Pereda Ruiz](https://github.com/MauriPereda05)




