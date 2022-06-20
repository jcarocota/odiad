/*Definimos la clase Producto con 3 atributos y 2 métodos*/
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    descuento() {
        let boleano;
        if (this.precio > 900) {
            boleano = true;
        } else {
            boleano = false;
        }
        return boleano;
    }
    precioFinal() {
        let precioF;
        if (this.precio > 900) {
            precioF = ((this.precio) * 0.1 + this.precio).toFixed(2)
        } else {
            precioF = ((this.precio) * 0.15 + this.precio).toFixed(2)
        }
        return parseFloat(precioF);
    }
}

/*Definimos un array para todos los productos de la tienda*/
const productosDeTienda = [];
/*Definimos un array de objetos que son los productos adquiridos por el cliente*/
const productos = [];

const canasta = [];

/*Función para llenar el arreglo productosDeTienda */
function productosDisponibles() {
    const ganadorA = new Producto(1, "Ganador A", 350);
    productosDeTienda.push(ganadorA);
    const ganadorB = new Producto(2, "Ganador B", 450);
    productosDeTienda.push(ganadorB);
    const ganadorC = new Producto(3, "Ganador C", 600);
    productosDeTienda.push(ganadorC);
    const proteinaA = new Producto(4, "Proteína A", 1100);
    productosDeTienda.push(proteinaA);
    const proteinaB = new Producto(5, "Proteína B", 1150);
    productosDeTienda.push(proteinaB);
    const proteinaC = new Producto(6, "Proteína C", 1400);
    productosDeTienda.push(proteinaC);
    const SnackA = new Producto(7, "Snack A", 150);
    productosDeTienda.push(SnackA);
    const SnackB = new Producto(8, "Snack B", 250)
    productosDeTienda.push(SnackB);;
    const SnackC = new Producto(9, "Snack C", 300);
    productosDeTienda.push(SnackC);
}

productosDisponibles();

const listadoProductos = document.getElementById("listadoProductos");
const listadoCarrito = document.getElementById("listadoCarrito");

/*Función para cargar productos y basada en lo visto en clase*/
function cargarProductos() {
    //debugger
    listadoProductos.innerHTML = "";
    for (const producto of productos) {
        const li = document.createElement("li");
        li.className = "collection-item blue-text"
        li.innerText = producto
        li.id = producto + "Prod"
        listadoCarrito.append(li);  /*Se pone en el nodo padre*/
    }
}
cargarProductos()

/*Función para crear la lista con todos los productos ingresados con la función agregarProducto()*/
function listarProductos() {
    //debugger   
    //El debugger lo comenté para que no detenga la ejecución;
    productosDeTienda.forEach((producto) => {
        const fila = `<tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.descuento()}</td>
        <td>${producto.precioFinal()}</td>
      </tr>`
        document.querySelector("tbody").innerHTML += fila;
        //Es para conectarnos a elementos HTML por cualquiera de sus elementos. Aquí fue con tbody
    })
}

/*Llama a l función de arriba*/
listarProductos();

/*Le asginamos la función de agregarProducto al botón del archivo HTML*/
document.getElementById("boton").onclick = agregarProducto;

/*Las 3 funciones son para agregar elemento a la tabla. Los elementos son ingresados por el formulario*/

/*Función para agregar un producto*/
function agregarProducto() {
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;
    canasta.push([generador(), producto, cantidad, precio]);
    hacerTabla();
}

/*Con esta función se agrega el producto a la tabla*/
function hacerTabla() {
    let tabla = "<thead><tr><th>Identificador</th><th>Producto</th><th>Cantidad</th><th>Precio</th></tr></thead><tbody>"
    for (let i = 0; i < canasta.length; i++) {
        tabla += `<tr><td>${canasta[i][0]}</td><td>${canasta[i][1]}</td><td>${canasta[i][2]}</td><td>${canasta[i][3]}</td></tr>`;
    }
    document.getElementById("factura").innerHTML = tabla;
}

/*Esta función crea un id para los productos*/
function generador() {
    return (Math.random() * 10).toFixed(0);
}

