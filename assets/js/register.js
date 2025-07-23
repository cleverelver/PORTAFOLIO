document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => { // Espera un poco más para asegurarse de que todo esté cargado
        console.log("Registro JS cargado correctamente ✅");

        const registerForm = document.getElementById('registerForm');

        if (!registerForm) {
            console.error("❌ El formulario de registro no se encontró en el DOM.");
            return;
        }

        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Formulario de registro enviado");

            const username = document.getElementById('reg-username').value.trim();
            const password = document.getElementById('reg-password').value.trim();

            if (localStorage.getItem(username)) {
                alert("❌ Este usuario ya existe. Intenta con otro.");
            } else {
                const newUser = { username, password };
                localStorage.setItem(username, JSON.stringify(newUser));
                alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
                window.location.href = 'login.html';
            }
        });
    }, 100); // Pequeña espera de 100ms
});
