document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('text').value.trim();

    // Valida se todos os campos estão preenchidos
    if (!name || !email || !subject || !phone || !message) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return; // Impede o envio do formulário
    }

    // Salva os dados no localStorage
    localStorage.setItem('contactForm', JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        phone: phone,
        message: message
    }));

    // Exibe um pop-up de confirmação
    alert('Mensagem enviada com sucesso. Logo entraremos em contato.');

    // Limpa os campos após enviar
    document.getElementById('contactForm').reset();
});