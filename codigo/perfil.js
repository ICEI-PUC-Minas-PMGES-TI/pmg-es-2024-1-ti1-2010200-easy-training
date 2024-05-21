if (!usuarioCorrente || !usuarioCorrente.login) {
} else {
    // Função para atualizar o menu do cabeçalho
    function atualizarMenuCabecalho() {
        var menuLogin = document.getElementById('login');
        var menuCadastro = document.getElementById("cadastro")
        if (menuLogin) {
            menuLogin.remove(); // Remove o item de login
            menuCadastro.remove();
            var novoItem = document.createElement('li');
novoItem.innerHTML = '<a class="text-center" href="perfil.html">Perfil</a>';
// Selecionar o elemento <ul> que contém os itens do menu
var menu = document.querySelector('.menu');
// Verificar se o menu existe e tem pelo menos um filho
if (menu && menu.children.length > 1) {
    // Inserir o novo item antes do segundo item da lista (índice 1)
    menu.insertBefore(novoItem, menu.children[1]);
} 
        }
    }

    // Chama a função para atualizar o menu do cabeçalho ao carregar a página
    window.addEventListener('load', atualizarMenuCabecalho);
}


function exibeUsuarioCorrente() {
    // Cria os itens de lista para o usuário corrente
    let usuario = usuarioCorrente;
    let usuarioLista = `
        <li>Nome: ${usuario.nome}</li>
        <li>Login: ${usuario.login}</li>
        <li>Email: ${usuario.email}</li>
        <li>Senha: ${usuario.senha}</li>`;


    // Substitui os itens do corpo da lista com os itens do usuário corrente
    document.getElementById("ul-usuarios").innerHTML = usuarioLista;
}

function initPage() {
    // Associa a função de logout ao botão
    document.getElementById('btn_logout').addEventListener('click', logoutUser);

    // Informa o nome do usuário logado
    document.getElementById('nomeUsuario').innerHTML = usuarioCorrente.nome;

    // Lista o usuário corrente 
    exibeUsuarioCorrente();
}

// Associa ao evento de carga da página a função para verificar se o usuário está logado
window.addEventListener('load', initPage);