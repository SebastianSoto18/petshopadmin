import { clientServices } from "../service/client-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.querySelector("[data-nombre]").value;
        const email = document.querySelector("[data-email]").value;

        clientServices.crearCliente(nombre, email)
        .then(() => {window.location.href = "/screens/registro_completado.html"})
        .catch(error => alert("Ocurrió un error:", error));
});