document.addEventListener('DOMContentLoaded', function() {
    console.log("Login JS cargado correctamente ✅");

    const loginForm = document.getElementById('loginForm');

    if (!loginForm) {
        console.error("❌ El formulario de login no se encontró en el DOM.");
        return;
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Formulario de login enviado");

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        const storedUser = localStorage.getItem(username);

        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.password === password) {
                alert("✅ Inicio de sesión exitoso.");
                window.location.href = 'index.html'; // Redirige a index.html
            } else {
                alert("❌ Contraseña incorrecta.");
            }
        } else {
            alert("❌ Usuario no encontrado. Regístrate primero.");
        }
    });

    // Alternar visibilidad de la contraseña
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    if (togglePassword && passwordField) {
        togglePassword.addEventListener('click', function() {
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                togglePassword.classList.remove('bx-show');
                togglePassword.classList.add('bx-hide');
            } else {
                passwordField.type = 'password';
                togglePassword.classList.remove('bx-hide');
                togglePassword.classList.add('bx-show');
            }
        });
    }
});
