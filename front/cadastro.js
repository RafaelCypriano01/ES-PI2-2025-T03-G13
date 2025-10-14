
const nome         = document.getElementById("nome");
const sobrenome    = document.getElementById("sobrenome");
const email        = document.getElementById("email");
const tel          = document.getElementById("telefone");
const senha        = document.getElementById("senha");
const confSenha    = document.getElementById("confirmSenha");
const btnCadastro  = document.getElementById("botaoCadastro");

async function salvarUsuario(){
    
    const body = {
       nome : nome.value,
       sobrenome : sobrenome.value,
       telefone : tel.value,
       email : email.value,
       senha : senha.value
    }
    fetch("http://localhost:3000/usuarios", {
  method: "POST", // tipo da requisição
  headers: {
    "Content-Type": "application/json", // informa que o corpo é JSON
  },
  body: JSON.stringify(body),
})
.then(response => {
  if (!response.ok) {
    throw new Error("Erro na requisição: " + response.status);
  }
  return response.json(); // converte resposta pra JSON
})
.then(data => {
  console.log("Usuário cadastrado:", data);
  window.location.href = "login.html";
})    
}

btnCadastro.addEventListener("click", salvarUsuario);

