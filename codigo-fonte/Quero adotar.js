Karine
document.getElementById('petForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const estado = document.getElementById('idade').value;
    const cidade = document.getElementById('cidade').value;
    const endereco = document.getElementById('estado').value;
    const info = document.getElementById('info').value;
    

    if (nome && estado && cidade && endereco && info && foto) {
  
        alert('Cadastro realizado com sucesso!');

        redirecionar();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});


