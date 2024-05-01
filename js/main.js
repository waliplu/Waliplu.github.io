const productos = [

    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        "id": "abrigo-05",
        "titulo": "Abrigo 05",
        "imagen": "./img/abrigos/05.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1000
    },
    {
        id: "conjunto-001",
        titulo: "Azul Acero 001",
        imagen: "./img/uniforme-medico/001.png",
        categoria: {
            nombre: "Uniformermes Medicos",
            id: "conjuntos"
        },
        precio: 65
    },
    {
        id: "conjunto-002",
        titulo: "Celeste Cielo 002",
        imagen: "./img/uniforme-medico/002.png",
        categoria: {
            nombre: "Uniformermes Medicos",
            id: "conjuntos"
        },
        precio: 65
    },
    {
        id: "conjunto-003",
        titulo: "Cobalto 003",
        imagen: "./img/uniforme-medico/003.png",
        categoria: {
            nombre: "Uniformermes Medicos",
            id: "conjuntos"
        },
        precio: 65
    },
    {
        id: "conjunto-004",
        titulo: "Crema 004",
        imagen: "./img/uniforme-medico/004.png",
        categoria: {
            nombre: "Uniformermes Medicos",
            id: "conjuntos"
        },
        precio: 65
    },
    {
        id: "conjunto-005",
        titulo: "Lila Bajo 005",
        imagen: "./img/uniforme-medico/005.png",
        categoria: {
            nombre: "Uniformermes Medicos",
            id: "conjuntos"
        },
        precio: 65
    },
    {
        id: "conjunto-006",
        titulo: "Negro 006",
        imagen: "./img/uniforme-medico/006.png",
        categoria: {
            nombre: "Uniformermes Medicos",
            id: "conjuntos"
        },
        precio: 65
    },
    {
        id: "conjunto-007",
        titulo: "Rosado Intermedio 007",
        imagen: "./img/uniforme-medico/007.png",
        categoria: {
            nombre: "Uniformermes Medicos",
            id: "conjuntos"
        },
        precio: 65
    },
    {
        id: "conjunto-008",
        titulo: "Verde Olivo 008",
        imagen: "./img/uniforme-medico/008.png",
        categoria: {
            nombre: "Uniformermes Medicos",
            id: "conjuntos"
        },
        precio: 65
    },
   
   
    {
        "id": "camiseta-02",
        "titulo": "Camiseta 02",
        "imagen": "./img/camisetas/02.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-03",
        "titulo": "Camiseta 03",
        "imagen": "./img/camisetas/03.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-04",
        "titulo": "Camiseta 04",
        "imagen": "./img/camisetas/04.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-05",
        "titulo": "Camiseta 05",
        "imagen": "./img/camisetas/05.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-06",
        "titulo": "Camiseta 06",
        "imagen": "./img/camisetas/06.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-07",
        "titulo": "Camiseta 07",
        "imagen": "./img/camisetas/07.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-08",
        "titulo": "Camiseta 08",
        "imagen": "./img/camisetas/08.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        id: "pantalon-001",
        titulo: "Azul Acero 001",
        imagen: "./img/pantalones/001.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 38
    },
    {
        id: "pantalon-002",
        titulo: "Camote 002",
        imagen: "./img/pantalones/002.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 38
    },
    {
        id: "pantalon-003",
        titulo: "Negro 003",
        imagen: "./img/pantalones/003.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 38
    },
    {
        id: "pantalon-004",
        titulo: "Palo Rosa 004",
        imagen: "./img/pantalones/004.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 38
    },
   
];



const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">S/.${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar    <i class="bi bi-cart-plus"></i></button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Totos los Productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}