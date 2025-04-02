document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const mensagemStatus = document.getElementById("mensagemStatus");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede o envio padrão

      // Mostra estado de carregamento (opcional)
      mensagemStatus.textContent = "Enviando...";
      mensagemStatus.className = "mensagem-status carregando";

      // Coleta os dados do formulário
      const formData = new FormData(form);
      const dados = Object.fromEntries(formData.entries());

      // Envia os dados
      enviarParaEmail(dados, mensagemStatus, form);
    });
  }
});

function enviarParaEmail(dados, mensagemElemento, form) {
  const endpoint =
    "https://formsubmit.co/ajax/rafaelsantosgoncalves5@gmail.com";

  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: dados.nome || dados.name,
      email: dados.email,
      message: dados.mensagem || dados.message,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na rede");
      }
      return response.json();
    })
    .then((data) => {
      // Sucesso
      mensagemElemento.textContent = "E-mail enviado com sucesso!";
      mensagemElemento.className = "mensagem-status sucesso";
      form.reset(); // Limpa o formulário

      // Opcional: esconder a mensagem após alguns segundos
      setTimeout(() => {
        mensagemElemento.style.display = "none";
      }, 5000);
    })
    .catch((error) => {
      console.error("Erro:", error);
      mensagemElemento.textContent =
        "Não foi possível enviar o e-mail. Por favor, tente novamente mais tarde.";
      mensagemElemento.className = "mensagem-status erro";
    });
}
