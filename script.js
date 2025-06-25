document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio do formulário

  const email = document.getElementById("email").value;
  const erro = document.getElementById("erroEmail");

  // Expressão regular simples para validar email
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValido.test(email)) {
    erro.textContent = "Por favor, insira um email válido.";
  } else {
    erro.textContent = "";
    alert("Email válido! Formulário enviado com sucesso.");
  }
});