// Tenemos un li de productos

// Corregimos ruta de archivos .jpg
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

// Se aplicó el query selector con el id de los elementos del html
const ul = document.querySelector("#lista-de-productos");
const $i = document.querySelector("#buscar");

// Metimos el for para mostrar los productos a una función que no estaba declarada <displayProductos()>
function displayProductos(productos) {
  productos.innerHTML= '';
  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    ul.appendChild(d);
  };
}

// Llamamos a la función displayProductos
displayProductos(productos);

// Selecciona el botón filtro
const botonDeFiltro = document.querySelector("button");



botonDeFiltro.onclick = function() {
  // Limpia la lista pa mostrar los productos
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  // <!--Obtiene el valor del input
  const texto = $i.value;
  console.log(texto);

  // Filtra los productos según lo que escribimos en el input
  const productosFiltrados = filtrado(productos, texto );

  displayProductos(productosFiltrados);

  // Esto no se utiliza porque ya los crea en la otra función
  // for (let i = 0; i < productosFiltrados.length; i++) {
  //   var d = document.createElement("div")
  //   d.classList.add("producto")
  
  //   var ti = document.createElement("p")
  //   ti.classList.add("titulo")
  //   ti.textContent = productosFiltrados[i].nombre
    
  //   var imagen = document.createElement("img");
  //   imagen.setAttribute('src', productosFiltrados[i].img);
  
  //   d.appendChild(ti)
  //   d.appendChild(imagen)
  
  //   ul.appendChild(d)
  // }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  