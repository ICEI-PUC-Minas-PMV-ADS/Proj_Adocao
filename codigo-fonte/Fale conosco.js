function enviarFormulario() {
    console.log('Função enviarFormulario chamada');

    
    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('subject').value.trim();
    const telefone = document.getElementById('phone').value.trim();
    const mensagem = document.getElementById('text').value.trim();

    
    if (!nome || !email || !assunto || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    
    const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!regexTelefone.test(telefone)) {
        alert('Por favor, insira o telefone no formato (DDD) 12345-6789.');
        return;
    }

    
    const regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    
    alert('Formulário enviado com sucesso!');

    
    window.location.href = 'Destaques.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        enviarFormulario(); 
    });
});
