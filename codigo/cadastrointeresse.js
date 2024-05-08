let respostaUsuario = "";
function armazenarResposta() {
    const resposta = document.getElementById('openQuestion').value;
    respostaUsuario = resposta;
    alert("Resposta armazenada com sucesso!");
}
// Exemplo de como você pode usar a resposta armazenada
function enviarParaAPI() {
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