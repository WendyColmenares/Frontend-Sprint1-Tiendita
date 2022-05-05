let listarProductos = document.getElementById('listarProducto')
let formulario = document.getElementById('form')
let btnEditar = document.getElementById('btnEditar')
let btnEliminar = document.getElementById('btnEliminar')
let btnAgregar= document.getElementById('btnAgregar')

const traerProductos = async (url) =>{
    listarProductos.innerHTML = ''

    const resp = await fetch(url)
    const data = await resp.json()

   data.forEach(producto =>{
        const {id, imagen, nombreProducto, precio, peso, precioPorPeso,medida} = producto

        listarProductos.innerHTML +=`
        <td>${id}</td>
        <td><img src="${imagen}"></td>
        <td>${nombreProducto}</td>
        <td>${precio}</td>
        <td>${peso}</td>
        <td>${medida}</td>
        <td>${precioPorPeso}</td>
        <td>
        <button id="btnEliminar">Eliminar</button>
        <button id="btnEditar">Editar</button>
        </td>
        `
    })
}

document.addEventListener('DOMContentLoaded', traerProductos('http://localhost:4003/populares'))
document.addEventListener('DOMContentLoaded', traerProductos('http://localhost:4003/ofertas'))

formulario.addEventListener('submit', async e =>{
    e.preventDefault();
    let nombreProducto = document.getElementById('nombre').value;
    let precio= document.getElementById('precio').value;
    let peso = document.getElementById('peso').value;
    let medida = document.getElementById('medida').value;
    let precioPorCantidad= document.getElementById('precioPorCantidad').value;
    let imagen = document.getElementById('imagen').value;

    let resp = await fetch('http://localhost:4003/populares',{
        method: 'POST',
        body: JSON.stringify({
            imagen: imagen,
            nombreProducto: nombreProducto,
            precio:precio,
            peso:peso,
            precioPorPeso:precioPorCantidad,
            medida:medida
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }); 
})
