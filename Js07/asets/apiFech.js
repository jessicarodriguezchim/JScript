// URL de la API
const urlPeople = "https://reqres.in/api/users?delay=1";

// Función para obtener datos de la API y mostrarlos en la página
const getPeople = async () => {
    try {
        const storedData = localStorage.getItem("personas");
        const currentTime = Date.now();

        if (storedData) {
            const storedDataParsed = JSON.parse(storedData);
            const expirationTime = storedDataParsed.expirationTime;         

            if (currentTime < expirationTime) {
                printToDOM(storedDataParsed.data);
                return;
            }
        }

        const resolve = await fetch(urlPeople);
        const resolveJson = await resolve.json();
        const expirationTime = currentTime + 60000; // 1 minuto
        const dataWithTimestamp = {
            expirationTime: expirationTime,
            data: resolveJson.data
        };
        printToDOM(resolveJson);
        localStorage.setItem("personas", JSON.stringify(dataWithTimestamp));
    } catch (error) {
        console.warn(error);
    }
};

// Función para imprimir los datos en la tabla
function printToDOM(personas) {
    let arreglo_personas = personas;
    let body = "";
    for (let i = 0; i < arreglo_personas.length; i++) {
        body += `
            <tr>
                <td>${arreglo_personas[i].id}</td>
                <td>${arreglo_personas[i].first_name}</td>
                <td>${arreglo_personas[i].last_name}</td>
                <td>${arreglo_personas[i].email}</td>
                <td><img src="${arreglo_personas[i].avatar}" alt="Avatar"/></td>
            </tr>`;
    }
    document.getElementById('data').innerHTML = body;
}

// Mostrar los datos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    getPeople();
});
