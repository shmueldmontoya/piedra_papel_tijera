// Declarar variables a utilizar
let seleccionUsuario;
let seleccionPC;
let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijera = document.getElementById("tijera");
let titulo = document.getElementById("titulo_eleccion")

// Funcion para mostrar al usuario, ya sea piedra, papel, tijera en lugar de un numero
function traducirNumero() {
    if (seleccionPC == 1) {
        return "Piedra"
    } else if (seleccionPC == 2) {
        return "Papel"
    } else {
        return "Tijera"
    }
}

// funciones depende de la seleccion del usuario
function espiedra() {
    seleccionUsuario = 1;
    seleccionPC = Math.floor(Math.random() * 3 + 1);
    if (seleccionPC == seleccionUsuario) {
        titulo.innerHTML = "Empate, el PC eligió " + traducirNumero();
    } else if (seleccionUsuario == 1 && seleccionPC == 3) {
        titulo.innerHTML = "Ganaste, el PC eligió " + traducirNumero();
    } else if (seleccionUsuario == 2 && seleccionPC == 1) {
        titulo.innerHTML = "Ganaste, el PC eligió " + traducirNumero();
    } else if (seleccionUsuario == 3 && seleccionPC == 2) {
        titulo.innerHTML = "Ganaste, el PC eligió " + traducirNumero();
    } else {
        titulo.innerHTML = "Perdiste, el PC eligió " + traducirNumero();
    }
}
function espapel() {
    seleccionUsuario = 2;
    seleccionPC = Math.floor(Math.random() * 3 + 1);
    if (seleccionPC == seleccionUsuario) {
        titulo.innerHTML = "Empate, el PC eligió " + traducirNumero();
    } else if (seleccionUsuario == 1 && seleccionPC == 3) {
        titulo.innerHTML = "Ganaste, el PC eligió " + traducirNumero();
    } else if (seleccionUsuario == 2 && seleccionPC == 1) {
        titulo.innerHTML = "Ganaste, el PC eligió " + traducirNumero();
    } else if (seleccionUsuario == 3 && seleccionPC == 2) {
        titulo.innerHTML = "Ganaste, el PC eligió " + traducirNumero();
    } else {
        titulo.innerHTML = "Perdiste, el PC eligió " + traducirNumero();
    }
}
function estijera() {
    seleccionUsuario = 3;
    seleccionPC = Math.floor(Math.random() * 3 + 1);
    if (seleccionPC == seleccionUsuario) {
        titulo.innerHTML = "Empate, el PC eligió " + traducirNumero();
    } else if (seleccionUsuario == 1 && seleccionPC == 3) {
        titulo.innerHTML = "Ganaste, el PC eligió " + traducirNumero();
    } else if (seleccionUsuario == 2 && seleccionPC == 1) {
        titulo.innerHTML = "Ganaste, el PC eligió " + traducirNumero();
    } else if (seleccionUsuario == 3 && seleccionPC == 2) {
        titulo.innerHTML = "Ganaste, el PC eligió " + traducirNumero();
    } else {
        titulo.innerHTML = "Perdiste, el PC eligió " + traducirNumero();
    }
}


piedra.addEventListener("click", espiedra)
papel.addEventListener("click", espapel)
tijera.addEventListener("click", estijera)

// funciones para las annimaciones de botones
function animacionPiedra() {
    piedra.classList.add("animate__heartBeat")
    setTimeout(() => {
        piedra.classList.remove("animate__heartBeat");
    }, 1250);
}
function animacionPapel() {
    papel.classList.add("animate__heartBeat")
    setTimeout(() => {
        papel.classList.remove("animate__heartBeat");
    }, 1300);
}
function animacionTijera() {
    tijera.classList.add("animate__heartBeat")
    setTimeout(() => {
        tijera.classList.remove("animate__heartBeat");
    }, 1300);
}

piedra.addEventListener("click", animacionPiedra)
papel.addEventListener("click", animacionPapel)
tijera.addEventListener("click", animacionTijera)