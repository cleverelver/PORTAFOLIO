document.addEventListener('DOMContentLoaded', function () {
    const forgotPasswordLink = document.querySelector('.forgot-password');

    forgotPasswordLink.addEventListener('click', function (event) {
        event.preventDefault();

        const username = prompt("Por favor, ingresa tu nombre de usuario para restablecer la contraseña:");

        if (!username) {
            alert("❌ Debes ingresar un nombre de usuario.");
            return;
        }

        const userData = localStorage.getItem(username);

        if (!userData) {
            alert("❌ Usuario no encontrado. Verifica el nombre de usuario.");
            return;
        }

        const newPassword = prompt("Ingresa tu nueva contraseña:");

        if (!newPassword || newPassword.trim() === "") {
            alert("❌ La contraseña no puede estar vacía.");
            return;
        }

        const user = JSON.parse(userData);
        user.password = newPassword.trim();
        localStorage.setItem(username, JSON.stringify(user));

        alert("✅ Contraseña restablecida con éxito. Ahora puedes iniciar sesión con tu nueva contraseña.");
    });
});