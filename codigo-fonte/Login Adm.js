const validCredentials = {
    login: "admin",
    senha: "1234"
};



document.getElementById("forgot-password").addEventListener("click", function (event) {
    event.preventDefault(); 
    const login = prompt("Por favor, insira o seu login para redefinir a senha:");
    if (login) {
        alert(`Um link para redefinir sua senha foi enviado para o login: ${login}`);
    } else {
        alert("Login não fornecido. Não foi possível enviar o link.");
    }
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    
    if (login === "admin" && senha === "1234") {
        alert("Login bem-sucedido!");
        window.location.href = "Adm Cadastro de Pet.html"; 
    } else {
        alert("Login ou senha inválidos. Tente novamente.");
    }
});

