// Funciones para enviar objetos al array
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

// Función que se ocupa de renderizar las tarjetas de producto
const renderizarProductos = () => {
  const contenedor = document.getElementById("contenedor-tarjetas");

  // Si por alguna razón el contenedor no existe la página, frena la ejecución
  if (!contenedor) return;

  fetch("./data/productos.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al mapear el archivo JSON de productos");
      }
      return response.json();
    })
    .then((data) => {
      
      contenedor.innerHTML = "";

      data.forEach((producto) => {
       
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card");

       
        const contenedorImg = document.createElement("div");
        contenedorImg.classList.add("card-img");
        
        const img = document.createElement("img");
        img.src = `./${producto.img}`;
        img.alt = producto.nombre;
        
        contenedorImg.appendChild(img);

       
        const contenedorInfo = document.createElement("div");
        contenedorInfo.classList.add("card-info");

       
        const envioTxt = document.createElement("p");
        envioTxt.classList.add("envio-txt");
        envioTxt.textContent = "Envío gratis";

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const descripcion = document.createElement("p");
        descripcion.classList.add("descripcion");
       
        descripcion.textContent = producto.descripcion || "Componente de alta calidad para potenciar tu setup.";

        const precio = document.createElement("p");
        precio.classList.add("price");
        
        precio.textContent = `$${Number(producto.precio).toLocaleString('es-AR')}`;

       
        const boton = document.createElement("button");
        boton.classList.add("btn-add");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
          agregarAlCarrito(producto);
        });

       
        contenedorInfo.appendChild(envioTxt);
        contenedorInfo.appendChild(titulo);
        contenedorInfo.appendChild(descripcion);
        contenedorInfo.appendChild(precio);
        contenedorInfo.appendChild(boton);

        
        tarjeta.appendChild(contenedorImg);
        tarjeta.appendChild(contenedorInfo);

        
        contenedor.appendChild(tarjeta);
      });
    })
    .catch((error) => console.error("Error cargando productos:", error));
};

document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);
  renderizarProductos();
});