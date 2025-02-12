// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre !== "") {
        // Agregar el nombre a la lista
        listaAmigos.push(nombre);
        
        // Mostrar el nombre en la lista en pantalla
        mostrarListaAmigos();

        // Limpiar el campo de texto
        input.value = "";
    }else{
        alert("No debes dejar el campo vacio")
        }
    }
    
function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista antes de agregar los nuevos elementos

    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Se necesitan al menos dos personas para sortear.");
        return;
    }

    // Hacer una copia de la lista de amigos para que no se modifique la original
    const amigosDisponibles = [...listaAmigos];

    // Seleccionar un amigo aleatorio
    const index = Math.floor(Math.random() * amigosDisponibles.length);
    const amigo = amigosDisponibles[index];

    // Eliminar al amigo sorteado de la lista para evitar que se repita
    amigosDisponibles.splice(index, 1);

    // Seleccionar un amigo secreto para esta persona
    const indexAmigoSecreto = Math.floor(Math.random() * amigosDisponibles.length);
    const amigoSecreto = amigosDisponibles[indexAmigoSecreto];

    // Mostrar el resultado del sorteo
    mostrarResultado(amigo, amigoSecreto);
}

// Función para mostrar los resultados del sorteo
function mostrarResultado(amigo, amigoSecreto) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ""; // Limpiar resultados anteriores

    // Mostrar un solo resultado del sorteo
    const li = document.createElement('li');
    li.textContent = `${amigoSecreto}`;
    listaResultado.appendChild(li);
}