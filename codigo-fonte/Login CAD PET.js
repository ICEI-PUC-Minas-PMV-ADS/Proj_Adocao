const validCredentials = {
  login: "admin",
  senha: "1234",
};

document
  .getElementById("forgot-password")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const login = prompt(
      "Por favor, insira o seu login para redefinir a senha:"
    );
    if (login) {
      alert(
        `Um link para redefinir sua senha foi enviado para o login: ${login}`
      );
    } else {
      alert("Login não fornecido. Não foi possível enviar o link.");
    }
  });

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAdmin", "true");
      alert("Login bem-sucedido!");
      window.location.href = "Pet para Adoção.html";
    } else {
      alert("Login ou senha inválidos. Tente novamente.");
    }
  });
