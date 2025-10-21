
  document.addEventListener("DOMContentLoaded", function() {
    const addCursoBtn = document.querySelector("button.btn-outline-secondary"); // botão "Adicionar Curso +"
    const form = document.querySelector("form");
    const tabelaBody = document.querySelector("tbody");

    // Função para adicionar novo campo de curso no formulário
    addCursoBtn.addEventListener("click", function() {
      const novoDiv = document.createElement("div");
      novoDiv.classList.add("mb-3");

      const input = document.createElement("input");
      input.type = "text";
      input.classList.add("form-control");
      input.name = "curso[]";
      input.placeholder = "Informe o nome do curso";
      input.required = true;

      novoDiv.appendChild(input);

      // insere o novo campo antes do botão "Adicionar Curso +"
      form.insertBefore(novoDiv, addCursoBtn.parentElement);
    });

    // função para excluir linha da tabela
    tabelaBody.addEventListener("click", function(e) {
      if(e.target && e.target.matches("button.btn-danger")) {
        const linha = e.target.closest("tr");
        if(linha) linha.remove();
      }
    });
  });

