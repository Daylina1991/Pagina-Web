import {
  guardarCarrito,
  obtenerCarrito,
  vaciarCarritoStorage,
} from "./storage.js";

import { actualizarContador, mostrarMensaje } from "./ui.js";


export const agregarAlCarrito = (producto) => {
  const carrito = obtenerCarrito();

  // Buscamos si el producto ya está en el carrito usando su ID
  const productoExistente = carrito.find(item => item.id === producto.id);

  if (productoExistente) {
    // Si ya existe, simplemente le sumamos 1 a su cantidad
    productoExistente.cantidad = (productoExistente.cantidad || 1) + 1;
  } else {
    // Si es nuevo, lo agregamos al array inicializando la cantidad en 1
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito(carrito);
  actualizarContador(carrito);
  mostrarMensaje(`Agregaste: ${producto.nombre} 🛒`);
};

export const eliminarProducto = (indice) => {
  const carrito = obtenerCarrito();
  
  
  carrito.splice(indice, 1);

  guardarCarrito(carrito);
  actualizarContador(carrito);
  mostrarMensaje("Producto eliminado ✅");
};

export const vaciarCarrito = () => {
  vaciarCarritoStorage();
  actualizarContador([]);
  mostrarMensaje("Carrito vacío 🗑️");
};