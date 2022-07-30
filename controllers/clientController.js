import { clientServices } from "../service/client-service.js";

const table = document.querySelector("[data-table]");

const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement("tr");
    const contenido = `
        <td class="td" data-td>
        ${nombre}
        </td>
        <td>${email}</td>
        <td>
        <ul class="table__button-control">
            <li>
            <a
                href="../screens/editar_cliente.html?id=${id}"
                class="simple-button simple-button--edit"
            >
                Editar
            </a>
            </li>
            <li>
            <button class="simple-button simple-button--delete" type="button">
                Eliminar
            </button>
            <span style="display:none" class="id">${id}</span>
            </li>
        </ul>
    </td>
    `;
    linea.innerHTML = contenido;

    const buttonDelete = linea.querySelector("button");

    buttonDelete.addEventListener("click", () => {
            const padre = buttonDelete.parentElement;
            const id=padre.children[1].innerText;
            clientServices.eliminarCliente(id).then(response => {alert(response.status)}).catch(error => alert("Ocurrió un error:", error));
    });

    return linea;
    };

clientServices.listaClientes()
    .then((data) => {
    data.forEach(({nombre,email,id}) => {
        const nuevaLinea = crearNuevaLinea(nombre,email,id);
        table.appendChild(nuevaLinea);
    });
    })
    .catch((error) => alert("Ocurrió un error"));

