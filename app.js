// Declarar variables a utilizar
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const titulo = document.getElementById("titulo_eleccion");
const conteoVictorias = document.getElementById("conteo_victorias");
const conteoDerrotas = document.getElementById("conteo_derrotas");

const PIEDRA = 1;
const PAPEL = 2;
const TIJERA = 3;

let victorias = 0;
let derrotas = 0;

const opciones = {
  [PIEDRA]: 'Piedra',
  [PAPEL]: 'Papel',
  [TIJERA]: 'Tijera'
};

// Función para mostrar la elección de la PC
function traducirNumero(num) {
  return opciones[num];
}

// Función para jugar una ronda
function jugar(seleccionUsuario) {
  const seleccionPC = Math.floor(Math.random() * 3 + 1);
  if (seleccionPC === seleccionUsuario) {
    titulo.innerHTML = `Empate, el PC eligió ${traducirNumero(seleccionPC)}`;
  } else if (
    (seleccionUsuario === PIEDRA && seleccionPC === TIJERA) ||
    (seleccionUsuario === PAPEL && seleccionPC === PIEDRA) ||
    (seleccionUsuario === TIJERA && seleccionPC === PAPEL)
  ) {
    titulo.innerHTML = `Ganaste, el PC eligió ${traducirNumero(seleccionPC)}`;
    victorias++;
  } else {
    titulo.innerHTML = `Perdiste, el PC eligió ${traducirNumero(seleccionPC)}`;
    derrotas++;
  }
  actualizarConteo();
}

// Función para actualizar el contador de victorias y derrotas
function actualizarConteo() {
  conteoVictorias.innerHTML = victorias;
  conteoDerrotas.innerHTML = derrotas;
}

// Función para agregar animación a un botón
function agregarAnimacion(elemento) {
  elemento.classList.add("animate__heartBeat");
  setTimeout(() => {
    elemento.classList.remove("animate__heartBeat");
  }, 1250);
}

// Asignar eventos a los botones
[piedra, papel, tijera].forEach((elemento, index) => {
  elemento.addEventListener("click", () => {
    jugar(index + 1);
    agregarAnimacion(elemento);
  });
});
