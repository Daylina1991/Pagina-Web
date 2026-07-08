//este archivo unifica las funciones de persistencia delcarrito
//en el localStorage(en formato Json)




const KEY = "carrito";
export const guardarCarrito = (carrito) => {
  //Convierte a json antes de guardar con stringify
  localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
  //convierte a js para obtener los datos con parse
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const vaciarCarritoStorage = () => {
  localStorage.removeItem(KEY);
};