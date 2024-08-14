/* CALCULADORA DE PRODUCTOS POR CANTIDAD*/
/** El presente código entregará productos y sus cantidades a elección para seleccionar,
 y el cliente deberá determinar la cantidad deseada, para finalmente recibir el valor final y el valor + IVA */

let total = 0;
let productos = [
  { id: 1, nombre: "Polera", precio: 45990, cantidad: 0 },
  { id: 2, nombre: "Pantalón", precio: 24990, cantidad: 0 },
  { id: 3, nombre: "Polerón", precio: 18990, cantidad: 0 },
];

function agregarProducto(productoId, cantidad) {
  const producto = productos.find((prod) => prod.id === productoId);
  if (producto) {
    producto.cantidad += cantidad;
    total += producto.precio * cantidad;
  } else {
    alert("No es un producto válido");
  }
}

function calcularTotal(productos) {
  return productos.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
}

let estado = 1;

do {
  let productoSeleccionado = parseInt(
    prompt(
      "Bienvenido\n Por favor selecciones el número correspondiente a su producto: \n 1- Polera \n 2- Pantalón\n 3- Polerón"
    )
  );
  let cantidad = parseInt(
    prompt("Ingrese la cantidad de unidades que desea comprar")
  );

  agregarProducto(productoSeleccionado, cantidad);

  estado = prompt(
    "¿Desea agregar más productos?\n seleccione: \n 1 para sí\n 2 para no"
  );
} while (estado == 1);

function calcularIva(total) {
  return Math.round(total * 0.21); // Redondear el IVA
}

const iva = calcularIva(total);

// Filtrar productos que han sido seleccionados
const productosSeleccionados = productos.filter((prod) => prod.cantidad > 0);
const totalFinal = calcularTotal(productosSeleccionados);

let detalleCompra = "Detalles de su compra:\n";
productosSeleccionados.forEach((prod) => {
  detalleCompra += `${prod.nombre}: ${prod.cantidad} unidades, Total: ${
    prod.precio * prod.cantidad
  }\n`;
});

alert(
  `${detalleCompra}\nEl total de sus productos es: ${totalFinal}\nEl valor total de su compra (con IVA) es: ${
    totalFinal + iva
  }`
);
