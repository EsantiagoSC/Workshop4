// En este archivo, se estaba intentando acceder a la ruta /data, pero esa ruta no existe en el servidor FastAPI. Se cambio esto a /products, que es la ruta que has definido en services.py. 


// Agregué el manejo de errores HTTP y cambié el nombre de la función callWebService a callTable para que coincida con el HTML
async function callMessage() {
    try {
        const response = await fetch('http://localhost/hello_ud');
        const data = await response.text();
        document.getElementById('result').textContent = data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function callTable() { // Cambié el nombre de la función a callTable
    try {
        const response = await fetch('http://localhost/products'); // Cambié /data a /products para coincidir con el endpoint en services.py
        const data = await response.json(); // En el código original, se intentaba llamar a '/data' en lugar de '/products'.
        
        let table = '<table>';
        table += '<tr><th>ID</th><th>Name</th><th>Description</th></tr>';
        
        data.forEach(item => {
            table += `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.description}</td></tr>`;
        });
        
        table += '</table>';
        
        document.getElementById('result').innerHTML = table;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function createProduct() { // Agregamos una función para crear un nuevo producto
    const name = document.getElementById('name').value; // En el código original, no había una función para crear un nuevo producto.
    const description = document.getElementById('description').value;

    try {
        const response = await fetch('http://localhost/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description }),
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error('Error:', error);
    }
}
