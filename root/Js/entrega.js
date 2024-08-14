/* CALCULADORA DE PRODUCTOS POR CANTIDAD*/
/** El presente codigo entregara productos y sus cantidades a eleccion para seleccionar,
 y el cliente debera determinar la cantidad deseada, para finalmente recibir el valor final y el valor + IVA */

let total=0;
let totalProducto1=0;
let totalProducto2=0;
let totalProducto3=0;
let estado=1;



function TipoProducto (producto, cantidad) {  
  
    if (producto==1) {
        totalProducto1 = totalProducto1 + (45990*cantidad);
        return total = total + totalProducto1;
        
    } else if (producto==2) {
        totalProducto2 = totalProducto2 + (24990*cantidad);
        return total = total + totalProducto2;
       
        
    }else if (producto==3) {
        totalProducto3 = totalProducto3 + (18990*cantidad);
        return total = total + totalProducto3;
        
    } else {
        alert('No es un producto valido ', 'valor total');
        return total;
    }
            
}

do {  
  
    producto= prompt('Bienvenido\n Por favor selecciones el numero correspondiente a su producto: \n 1- Polera \n 2- Pantalon\n 3- Poleron');

    cantidad= prompt('Ingrese la cantidad de unidades que desea comprar');
    TipoProducto(producto, cantidad);  

    estado= prompt('¿desea agregar mas productos?\n seleccione: \n 1 para si\n 2 para no');
} while (estado==1);

const valorIva = (total) => (total * 1.21); 
const iva =parseInt(valorIva(total));
alert(`El total de sus productos es: ${total}\n El valor total de su compra es: ${iva}`);


