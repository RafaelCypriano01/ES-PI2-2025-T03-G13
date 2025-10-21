
  // seleciona o botão pelo nome
  const botaoAdicionar = document.querySelector('button[name="botaoInstituicao"]');

  // pega o primeiro campo de input como modelo
  const inputModelo = document.getElementById('instituicao1');

  //Quando o botão for clicado
  botaoAdicionar.addEventListener('click', function() {
      // Clona todo o div que contém o input e o label
      const novoCampo = inputModelo.parentElement.cloneNode(true);

      // Limpa o valor do input clonado para não repetir o nome antigo
      novoCampo.querySelector('input').value = '';

      //atualiza o id do input clonado para evitar ids duplicados
      const inputsExistentes = document.querySelectorAll('input[name="instiruicao[]"]');
      novoCampo.querySelector('input').id = 'instituicao' + (inputsExistentes.length + 1);

      // Adiciona o novo campo **logo antes do botão**
      botaoAdicionar.parentElement.before(novoCampo);

      document.getElementById("continuarCadastro").addEventListener("click", () => {
  window.location.href = "cadastroCurso.html";
});


  });

