export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    const totalProductos = carrito.reduce((acum, prod) => acum + (prod.cantidad || 1), 0);
    contador.textContent = totalProductos;
  }
};

export const mostrarMensaje = (texto) => {
  let contenedor = document.getElementById("contenedor-toasts");
  
  if (!contenedor) {
    contenedor = document.createElement("div");
    contenedor.id = "contenedor-toasts";
    document.body.appendChild(contenedor);
  }

  const toast = document.createElement("div");
  toast.classList.add("toast-alerta");
  toast.textContent = texto;
  contenedor.appendChild(toast);

  //  elimina automáticamente a los 2.5 segundos
  setTimeout(() => {
    toast.remove();
  }, 2500);
};
