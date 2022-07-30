import { clientServices } from "../service/client-service.js";

const form = document.querySelector("[data-form]");

    form.addEventListener("submit",  (e) => {
        e.preventDefault();
        const nombre = document.querySelector("[data-nombre]").value;
        const email = document.querySelector("[data-email]").value;
        
        const url = new URL(window.location);
        const id = url.searchParams.get("id");

        clientServices.actualizarCliente(id, nombre, email).then(() => {
            window.location.href = "/screens/edicion_concluida.html";
        }).catch(error => alert("Ocurrió un error:", error));
    });

const obtenercliente = async() => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null) {
        window.location.href = "/screens/error.html";
    }
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    const response= await clientServices.detallesCliente(id);
    
    nombre.value = response.nombre;
    email.value = response.email;
   
}


obtenercliente();


