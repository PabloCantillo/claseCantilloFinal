$(() => {
	obtenerProductos();
	if (carrito.length) imprimirCarrito();
});

let productos;

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const obtenerProductos = () => {
	$.get("https://fakestoreapi.com/products", (respuesta, estado) => {
		if (estado != "success") return Swal.fire("Error obteniendo datos");
		productos = respuesta;
		imprimirProductos(true);
	});
};

const imprimirProductos = (animacion) => {
	$("#container").empty();
	let delay = 50;
	let fade = animacion ? 800 : 0;

	productos.forEach((p) => {
		let enCarrito = carrito.some((prodEnCarrito) => prodEnCarrito.id === p.id);
		delay = animacion ? delay + 200 : 0;

		$("#container").append(
			$(`
        <div class="producto">
            <div class="info"> 
                <img src="${p.image}" alt="">
                <div> 
                    <h2>${p.title}</h2>
                    <h3>Precio $<span>${p.price}</span></h3>
                </div>
            </div>
            <button id="${p.id}" ${
				enCarrito ? "disabled" : null
			} onclick="agregarAlCarrito(event)">${
				enCarrito ? "En Carrito" : "Añadir al Carrito"
			}</button>
        </div>
        `)
				.hide()
				.delay(delay)
				.fadeIn(fade)
		);
	});
};

const agregarAlCarrito = (e) => {
	e.target.textContent = "En Carrito";
	e.target.disabled = true;
	const idSeleccionado = Number(e.target.id);
	const productoFiltrado = productos.find((p) => p.id === idSeleccionado);
	carrito.push(productoFiltrado);
	localStorage.setItem("carrito", JSON.stringify(carrito));
	imprimirCarrito();
};

const imprimirCarrito = () => {
	$("#carrito").empty();

	let total = 0;

	carrito.forEach((p) => {
		total += total + Number(p.price);
		$("#carrito").append(`
        <tr>
            <td>${p.title}</td>
            <td>$${p.price}</td>
            <td><button id="${p.id}" class="eliminar" onclick="eliminarProducto(event)">Eliminar</button></td>
        </tr>
        `);
	});
	$("#carrito").append(`
    <span class="total">Total $${total.toFixed(2)}`);
};

const eliminarProducto = (e) => {
	const id = Number(e.target.id);
	const index = carrito.findIndex((p) => p.id === id);
	carrito.splice(index, 1);

	localStorage.setItem("carrito", JSON.stringify(carrito));

	imprimirCarrito();

	imprimirProductos(false);
};
