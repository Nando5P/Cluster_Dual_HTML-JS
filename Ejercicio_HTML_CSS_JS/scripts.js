let form = document.getElementById('registerForm');

form.addEventListener("submit", function(event) {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    if (!validarEmail(email.value)) {
        event.preventDefault();
        // Mensaje de error
        // Se muestra una alerta al usuario
        alert('El correo electrónico no es válido');
        // Registro del error en la consola
        console.log('El correo electrónico no es válido');
        form.reset();
        return;
    }
    if (!validarPassword(password.value)) {
        event.preventDefault();
        alert('La contraseña debe tener al menos 8 caracteres, una mayúscula y una minúscula');
        console.log('La contraseña debe tener al menos 8 caracteres, una mayúscula y una minúscula');
        form.reset();
        return;
    }
    
});

const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validarPassword = (password) =>
    password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password);


const images = [
            'Imagenes/ciudad-1.png',
            'Imagenes/ciudad-2.png',
            'Imagenes/ciudad-3.png',
            'Imagenes/anime-1.png',
            'Imagenes/anime-2.png',
            'Imagenes/anime-3.png',
            'Imagenes/anime-4.png',
            'Imagenes/anime-5.png',
        ];
        let current = 0;
        function changeBackground() {
            let next;
            do {
                next = Math.floor(Math.random() * images.length);
            } while (next === current && images.length > 1);
            current = next;
            document.body.style.backgroundImage = `url('${images[current]}')`;
        }
        changeBackground();
        setInterval(changeBackground, 7500);
