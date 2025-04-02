// Botão Voltar ao Topo - Aparece apenas após a seção Sobre e não em mobile
const backToTopButton = document.getElementById("back-to-top");
const sobreSection = document.getElementById("sobre");

// Função para verificar se é mobile
function isMobile() {
  return window.innerWidth <= 1024; // Considera mobile abaixo de 768px
}

window.addEventListener("scroll", () => {
  // Não mostrar em dispositivos mobile
  if (isMobile()) {
    backToTopButton.style.display = "none";
    return;
  }

  // Posição da seção Sobre em relação ao topo
  const sobrePosition = sobreSection.getBoundingClientRect().top;

  // Altura da janela de visualização
  const windowHeight = window.innerHeight;

  // Se a seção Sobre estiver visível ou já passou
  if (sobrePosition < windowHeight / 2) {
    backToTopButton.style.display = "flex"; // Mantém o flex do seu CSS
  } else {
    backToTopButton.style.display = "none";
  }
});

// Rolagem suave ao clicar no botão
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Também verificar no redimensionamento da tela
window.addEventListener("resize", () => {
  if (isMobile()) {
    backToTopButton.style.display = "none";
  }
});
