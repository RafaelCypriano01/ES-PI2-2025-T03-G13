document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const nome = document.getElementById("nome");
  const sobrenome = document.getElementById("sobrenome");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const senha = document.getElementById("senha");
  const confirmSenha = document.getElementById("confirmSenha");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // nao deixa o envio ser concluido antes da validação

    // senha entre 8 e 20 caracteres, com letras e números
    const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    // Verifica nome e sobrenome
    if (nome.value.trim() === "" || sobrenome.value.trim() === "") {
      alert("Por favor, preencha o nome e o sobrenome.");
      return;
    }

    // verifica se o formato do e-mail é valido
    if (!email.value.includes("@") || !email.value.includes(".")) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // Valida telefone (mínimo 10 dígitos)
    const telefoneNumeros = telefone.value.replace(/\D/g, "");
    if (telefoneNumeros.length < 10) {
      alert("Por favor, insira um número de telefone válido.");
      return;
    }

    // Valida senha
    if (!senhaRegex.test(senha.value)) {
      alert("A senha deve ter de 8 a 20 caracteres, conter letras e números, e não conter espaços nem símbolos.");
      return;
    }

    // Confirmação da senha
    if (senha.value !== confirmSenha.value) {
      alert("As senhas não coincidem. Verifique novamente.");
      return;
    }

    // Se tudo estiver correto
    alert("Cadastro realizado com sucesso!");
    form.reset(); // Limpa os campos
  });
});
