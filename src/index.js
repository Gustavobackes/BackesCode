function aviso() {
  titulo.style.cssText = "visibility: visible";
}
const titulo = document.querySelector("#aviso");
titulo.addEventListener("click", aviso);
