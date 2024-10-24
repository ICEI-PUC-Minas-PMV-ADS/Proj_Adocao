document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('text').value;

    // Salva os dados no localStorage
    localStorage.setItem('contactForm', JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        phone: phone,
        message: message
    }));

    alert('Formulário enviado com sucesso!'); // Mensagem de confirmação

    // Opcional: Limpa os campos após enviar
    document.getElementById('contactForm').reset();
});
