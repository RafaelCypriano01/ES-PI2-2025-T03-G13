
const email       = document.getElementById("emailInput");
const senha       = document.getElementById("senhaInput");
const btnLogin    = document.getElementById("btnLogin");

async function login(){                                                       
    const body = {
       email : email.value,
       senha : senha.value
    }
    fetch("http://localhost:3000/login", {
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
  console.log("Login feito com sucesso", data);
//   window.location.href = "paginaInicial.html";
})    
}

btnLogin.addEventListener("click", login);

