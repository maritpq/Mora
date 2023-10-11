function atualizarImagem(imagemSrc) {
  // Obtém a referência para a imagem grande e atualiza sua fonte
  const imagemGrande = document.getElementById("imagem-grande");
  imagemGrande.src = imagemSrc;
}
const carrossel = document.querySelector(".carrossel");
const anterior = document.querySelector(".seta-esquerda");
const proximo = document.querySelector(".seta-direita");

anterior.addEventListener("click", () => {
  carrossel.scrollLeft -= carrossel.offsetWidth;
});

proximo.addEventListener("click", () => {
  carrossel.scrollLeft += carrossel.offsetWidth;
});
