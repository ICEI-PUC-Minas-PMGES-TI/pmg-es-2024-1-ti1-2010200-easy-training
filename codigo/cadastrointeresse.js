function armazenarResposta() {
    const resposta = document.getElementById('openQuestion').value;
  
    if (!resposta.trim()) {
      alert('Por favor, preencha o campo de resposta antes de gerar a ficha.');
      return;
    }
  
    localStorage.setItem('userResponse', resposta);
    alert('Sua resposta foi armazenada com sucesso!');
  }
  
  // Exemplo de como você pode usar a resposta armazenada
  function enviarParaAPI() {
    const respostaUsuario = localStorage.getItem('userResponse');
  
    if (!respostaUsuario) {
      console.log('Nenhuma resposta armazenada para enviar.');
      return;
    }
  
    // Aqui você pode chamar a função para enviar a resposta armazenada para a API de inteligência artificial
    // Por exemplo:
    // fetch('url_da_api', {
    //     method: 'POST',
    //     body: JSON.stringify({ resposta: respostaUsuario }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(response => {
    //     return response.json();
    // }).then(data => {
    //     console.log(data);
    // });
    console.log('Resposta do usuário enviada para a API:', respostaUsuario);
  }