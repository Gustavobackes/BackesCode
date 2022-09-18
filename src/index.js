function aviso() {
  titulo.style.visibility = "visible";
  titulo2.style.visibility = "visible";
}

const titulo = document.querySelector("#aviso");
titulo.addEventListener("click", aviso);

const titulo2 = document.querySelector("#easterEgg");
titulo2.addEventListener("click", aviso);
titulo2.style.transition = "1s";