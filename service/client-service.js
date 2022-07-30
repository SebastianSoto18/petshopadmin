
const listaClientes = () => fetch("http://localhost:3000/perfiles").then(response => response.json());

const crearCliente = (nombre, email) => fetch("http://localhost:3000/perfiles",
                    {method: "POST", 
                    headers:{"Content-type":"application/json"},
                    body:JSON.stringify({nombre,email,id:uuid.v4()})});

const eliminarCliente = (id) => fetch(`http://localhost:3000/perfiles/${id}`,
                {method:"DELETE"});

const detallesCliente = (id) => fetch(`http://localhost:3000/perfiles/${id}`).then((response) => response.json());

const actualizarCliente = (id, nombre, email) => fetch(`http://localhost:3000/perfiles/${id}`,{
    method:"PUT",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({nombre,email})}).then((response) => response).catch((error) => console.log(error));

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detallesCliente,
    actualizarCliente
}

