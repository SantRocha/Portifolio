// Seleciona as imagens pelo seletor de classe
var designer = document.querySelector(".designer");
var developer = document.querySelector(".developer");

// Adiciona um evento de movimento do mouse no documento
document.addEventListener("mousemove", function(event) {
  // Calcula a porcentagem da posição horizontal do mouse em relação à largura da janela
  var percentage = event.clientX / window.innerWidth * 100;

  // Define a largura da imagem do designer como a porcentagem calculada
  designer.style.width = percentage + "%";

  // Define o recorte da imagem do desenvolvedor como a porcentagem calculada
  developer.style.clipPath = "inset(0 " + (100 - percentage) + "% 0 0)";
});