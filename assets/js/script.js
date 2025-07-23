document.addEventListener("DOMContentLoaded", function() {
    console.log("Portafolio cargado 🚀");

    // 🌙 Modo oscuro
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    
    if (darkModeToggle) {
        // Cargar preferencia del usuario (si ya activó el modo oscuro antes)
        if (localStorage.getItem("dark-mode") === "enabled") {
            document.body.classList.add("dark-mode");
            darkModeToggle.textContent = "☀️";
        }

        darkModeToggle.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                darkModeToggle.textContent = "☀️";
                localStorage.setItem("dark-mode", "enabled");
            } else {
                darkModeToggle.textContent = "🌙";
                localStorage.setItem("dark-mode", "disabled");
            }
        });
    } else {
        console.warn("⚠️ El botón de modo oscuro no fue encontrado en el DOM.");
    }

    // 📩 Formulario de contacto (Simulación de envío)
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (contactForm && formMessage) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                formMessage.textContent = "✅ Mensaje enviado con éxito!";
                formMessage.style.color = "white";

                setTimeout(() => {
                    contactForm.reset();
                    formMessage.textContent = "";
                }, 3000);
            } else {
                formMessage.textContent = "⚠️ Por favor, completa todos los campos.";
                formMessage.style.color = "white";
            }
        });
    } else {
        console.warn("⚠️ El formulario de contacto no fue encontrado en el DOM.");
    }
});