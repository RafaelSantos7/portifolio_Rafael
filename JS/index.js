document.addEventListener("DOMContentLoaded", function () {
  // Elementos e textos
  const nameElement = document.querySelector(".showcase-container h1");
  const titleElement = document.querySelector(".showcase-container p");

  const staticNamePart = "Oi, eu sou ";
  const animatedNamePart = "Rafael Santos!";

  const staticTitlePart = "A Professional ";
  const animatedTitlePart = "Developer FullStack";

  // Configurações de animação (suave e sincronizada)
  const typeSpeed = 120;
  const eraseSpeed = 40;
  const pauseBetween = 1500;

  // Estilo de destaque
  const highlightStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: "2px 8px",
    borderRadius: "4px",
    color: "#fff",
  };

  // Prepara a estrutura do HTML
  function initializeElements() {
    nameElement.innerHTML = "";
    titleElement.innerHTML = "";

    nameElement.appendChild(document.createTextNode(staticNamePart));
    titleElement.appendChild(document.createTextNode(staticTitlePart));

    const nameSpan = document.createElement("span");
    const titleSpan = document.createElement("span");

    Object.assign(nameSpan.style, highlightStyle);
    Object.assign(titleSpan.style, highlightStyle);

    nameElement.appendChild(nameSpan);
    titleElement.appendChild(titleSpan);

    return { nameSpan, titleSpan };
  }

  const { nameSpan, titleSpan } = initializeElements();

  // Função de animação unificada
  async function synchronizedAnimation() {
    while (true) {
      // Fase 1: Digitar nome
      for (let i = 0; i <= animatedNamePart.length; i++) {
        nameSpan.textContent = animatedNamePart.substring(0, i);
        await new Promise((resolve) => setTimeout(resolve, typeSpeed));
      }

      // Pequena pausa
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Fase 2: Digitar título (sincronizado)
      for (let i = 0; i <= animatedTitlePart.length; i++) {
        titleSpan.textContent = animatedTitlePart.substring(0, i);
        // Ajusta velocidade para sincronizar com o nome
        await new Promise((resolve) => setTimeout(resolve, typeSpeed * 0.9));
      }

      // Pausa conjunta
      await new Promise((resolve) => setTimeout(resolve, pauseBetween));

      // Fase 3: Apagar título
      for (let i = animatedTitlePart.length; i >= 0; i--) {
        titleSpan.textContent = animatedTitlePart.substring(0, i);
        await new Promise((resolve) => setTimeout(resolve, eraseSpeed));
      }

      // Pequena pausa
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Fase 4: Apagar nome
      for (let i = animatedNamePart.length; i >= 0; i--) {
        nameSpan.textContent = animatedNamePart.substring(0, i);
        await new Promise((resolve) => setTimeout(resolve, eraseSpeed * 1.1));
      }

      // Pausa final antes de recomeçar
      await new Promise((resolve) => setTimeout(resolve, pauseBetween));
    }
  }

  // Inicia a animação sincronizada
  synchronizedAnimation();
});
