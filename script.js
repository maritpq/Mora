function atualizarImagem(imagemSrc) {
  // Obtém a referência para a imagem grande e atualiza sua fonte
  const imagemGrande = document.getElementById("imagem-grande");
  imagemGrande.src = imagemSrc;
}
function abrirModal() {
  document.getElementById("successModal").style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
  document.getElementById("successModal").style.display = "none";
}

  async function enviarParaBaserow(event) {
    event.preventDefault(); // Evitar a submissão do formulário

    const form = event.target;
    const nome = form.elements["Nome"].value;
    const email = form.elements["E-mail"].value;
    const whatsapp = form.elements["Whatsapp"].value;
    const mensagem = form.elements["Mensagem"].value;

    const data = {
      Nome: nome,
      Email: email,
      Whatsapp: whatsapp,
      Mensagem: mensagem,
    };

    const token = "XNCRzDF8A2sJr5kEF1sX2F0OWSV5Jygy";
    try {
      const response = await fetch("https://api.baserow.io/api/database/rows/table/209729/?user_field_names=true", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token XNCRzDF8A2sJr5kEF1sX2F0OWSV5Jygy`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Dados enviados com sucesso.");
        // Redirecionar ou fazer algo após o envio bem-sucedido.

        abrirModal(); // Exibir o pop-up de sucesso
        setTimeout(function () {
          window.location.reload();
        }, 3000);
      } else {
        console.error("Erro ao enviar dados. Código de status:", response.status);
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  }
