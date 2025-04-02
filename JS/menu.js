document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  // Verifica o tamanho da tela ao carregar
  checkScreenSize();

  // Verifica quando a tela é redimensionada
  window.addEventListener("resize", checkScreenSize);

  // Função para verificar o tamanho da tela
  function checkScreenSize() {
    if (window.innerWidth <= 1020) {
      // Esconde os links originais
      document.querySelector(".navbar-container > ul").style.display = "none";
      // Mostra os links do menu mobile
      navLinks.style.display = "flex";
    } else {
      // Mostra os links originais
      document.querySelector(".navbar-container > ul").style.display = "flex";
      // Esconde os links do menu mobile
      navLinks.style.display = "none";
      // Remove a classe active se existir
      hamburgerMenu.classList.remove("active");
      navLinks.classList.remove("active");
    }
  }

  // Evento de clique no menu hamburger
  hamburgerMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");

    // Desabilita o scroll do body quando o menu está aberto
    if (navLinks.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  // Fechar o menu quando um link é clicado
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      hamburgerMenu.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });
});
