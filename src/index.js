function aviso() {
  titulo.style.cssText = "visibility: visible";
  titulo2.style.cssText = "visibility: visible";
}

const titulo = document.querySelector("#aviso");
titulo.addEventListener("click", aviso);

const titulo2 = document.querySelector("#easterEgg");
titulo2.addEventListener("click", aviso);
