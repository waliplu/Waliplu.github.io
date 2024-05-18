const productos = [

     {
        id: "chompa-01",
        titulo: "Chompa CH-1",
        imagen: "./img/chompa/CH-1.png",
        categoria: {
            nombre: "Chompas",
            id: "Chompas"
        },
        precio: 50
    },
    {
        id: "chompa-02",
        titulo: "Chompa CH-1",
        imagen: "./img/chompa/CH-2.png",
        categoria: {
            nombre: "Chompas",
            id: "Chompas"
        },
        precio: 80
    },
    {
        id: "chompa-03",
        titulo: "Chompa CH-1",
        imagen: "./img/chompa/CH-3.png",
        categoria: {
            nombre: "Chompas",
            id: "Chompas"
        },
        precio: 85
    },


    {
        id: "conjunto-001",
        titulo: "Blanco 001-B",
        imagen: "./img/uniforme/001-B.png",
        categoria: {
            nombre: "Uniformes Medicos",
            id: "conjuntos"
        },
        precio: 75
    },
    {
        id: "conjunto-002",
        titulo: "Guinda 125-G",
        imagen: "./img/uniforme/125-G.png",
        categoria: {
            nombre: "Uniformes Medicos",
            id: "conjuntos"
        },
        precio: 75
    },
    {
        id: "conjunto-003",
        titulo: "Crema 127-C",
        imagen: "./img/uniforme/127-C.png",
        categoria: {
            nombre: "Uniformes Medicos ",
            id: "conjuntos"
        },
        precio: 75
    },
    {
        id: "conjunto-004",
        titulo: "Palo Rosa 152",
        imagen: "./img/uniforme/152.png",
        categoria: {
            nombre: "Uniformes Medicos",
            id: "conjuntos"
        },
        precio: 75
    },
   
    {
        id: "conjunto-005",
        titulo: "Enfermera 230-E",
        imagen: "./img/uniforme/230-E.png",
        categoria: {
            nombre: "Uniformes Medicos",
            id: "conjuntos"
        },
        precio: 75
    },  {
        id: "conjunto-006",
        titulo: "Cobalto 275-C",
        imagen: "./img/uniforme/275-C.png",
        categoria: {
            nombre: "Uniformes Medicos",
            id: "conjuntos"
        },
        precio: 75
    },  {
        id: "conjunto-007",
        titulo: "Celeste Cielo 281-C",
        imagen: "./img/uniforme/281-C.png",
        categoria: {
            nombre: "Uniformes Medicos",
            id: "conjuntos"
        },
        precio: 75
    },
    {
        id: "conjunto-008",
        titulo: "Azul Electrico 293-E",
        imagen: "./img/uniforme/293-E.png",
        categoria: {
            nombre: "Uniformes Medicos",
            id: "conjuntos"
        },
        precio: 75
    },
    {
        id: "conjunto-009",
        titulo: "Azul Marino 320-M",
        imagen: "./img/uniforme/320-M.png",
        categoria: {
            nombre: "Uniformes Medicos",
            id: "conjuntos"
        },
        precio: 75
    },
    {
        id: "conjunto-010",
        titulo: "Marron 495-M",
        imagen: "./img/uniforme/495-M.png",
        categoria: {
            nombre: "Uniformes Medicos",
            id: "conjuntos"
        },
        precio: 75
    },
     {
        id: "conjunto-011",
        titulo: "Azul Acero 972-A",
        imagen: "./img/uniforme/972-A.png",
        categoria: {
            nombre: "Uniformes Medicos",
            id: "conjuntos"
        },
        precio: 75
    },
    {
        id: "conjunto-012",
        titulo: "Tecnologia T230-E",
        imagen: "./img/uniforme/T230-E.png",
        categoria: {
            nombre: "Uniformes Medicos",
            id: "conjuntos"
        },
        precio: 120
    },
     {
        id: "conjunto-013",
        titulo: "NUNTRI SC-C",
        imagen: "./img/uniforme/palta.jpg",
        categoria: {
            nombre: "Uniformes Medicos",
            id: "conjuntos"
        },
        precio: 60
    },
    {
        id: "Chaleco-004",
        titulo: "Dama 152",
        imagen: "./img/chaleco/CHA-1.png",
        categoria: {
            nombre: "Chalecos De Vestir",
            id: "Chalecos"
        },
        precio: 110
    },
    {
        id: "Chaleco-004",
        titulo: "Dama 152",
        imagen: "./img/chaleco/CHA-2.png",
        categoria: {
            nombre: "Chalecos De Vestir",
            id: "Chalecos"
        },
        precio: 110
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
