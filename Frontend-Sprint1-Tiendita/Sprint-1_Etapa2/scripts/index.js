const mostrarOfertas = document.getElementById('ofertas')
const mostrarPopulares = document.getElementById('populares')

const getProducts = async (url) =>{
    mostrarOfertas.innerHTML=''

    const resp = await fetch(url)
    const data =await resp.json()

    data.forEach(element => {
        const{imagen,descuento,precio,nombreProducto,medida} = element

        let descuento1 = element.descuento
        let precio1 = element.precio
        let descuento2 = descuento1 * precio1 /100;
        let descuentoT = precio1 - descuento2
        let descuentoTotal = descuentoT.toFixed(2)
        mostrarOfertas.innerHTML +=`
        <div class="carta">
        <p class="descuento">${descuento}% dto.</p>
        <img src="${imagen}" alt="">
        <p>$${descuentoTotal}/${medida} <del>$${precio}/${medida}</del></p>
        <p>${nombreProducto}</p>
        <button class="btn-agregar">Agregar</button>
        </div>
        </div>
        `
    });
}

const getProducts2 = async (url) =>{

    mostrarPopulares.innerHTML=''

    const resp = await fetch(url)
    const data =await resp.json()

    data.forEach(element =>{
        const {imagen,precio,nombreProducto,peso,precioPorPeso,medida} = element

        mostrarPopulares.innerHTML +=`
        <div class="carta">
        <div>
            <img src="${imagen}" alt="">
            <p>$${precio}</p>
            <p>${nombreProducto}</p>

            <p>${peso}($${precioPorPeso}/${medida})<p>
            <button class="btn-agregar">Agregar</button>
        </div>
        </div>
        `
    })

}

getProducts2('http://localhost:4003/populares')
getProducts('http://localhost:4003/ofertas')

