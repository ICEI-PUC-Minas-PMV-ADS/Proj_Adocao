/*Dennis*/
function salvarDados() {
    const especie = document.getElementById('especie').value;
    const raca = document.getElementById('raca').value;
    const porte = document.getElementById('porte').value;
    const informacoes = document.getElementById('informacoes').value;
    const foto = document.getElementById('foto').files[0];

    if (!especie || !raca || !porte || !informacoes || !foto) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const leitorDeArquivo = new FileReader();
    leitorDeArquivo.onloadend = function() {
        const imagemBase64 = leitorDeArquivo.result;
        
        // Salva os dados no localStorage
        const pet = {
            especie,
            raca,
            porte,
            informacoes,
            foto: imagemBase64 // Salvamos a imagem em formato base64
        };

        localStorage.setItem('petCadastro', JSON.stringify(pet));
        alert('Pet cadastrado com sucesso!');
        
        // Redireciona para outra página, se necessário
        window.location.href = 'Pet para Adoção.html';
    };
    
    if (foto) {
        leitorDeArquivo.readAsDataURL(foto); // Converte a imagem para base64
    }
}
