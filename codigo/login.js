
// Página inicial de Login
const LOGIN_URL = "login.html";

// Objeto para o banco de dados de usuários baseado em JSON
var db_usuarios = {};

// Objeto para o usuário corrente
var usuarioCorrente = {};

// Função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime(); // Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0; // Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16; // Random number between 0 and 16
        if (d > 0) { // Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else { // Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

// Dados de usuários para serem utilizados como carga inicial
const dadosIniciais = {
    usuarios: [
        { "id": generateUUID(), "login": "admin", "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com" },
        { "id": generateUUID(), "login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com" },
    ]
};

// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp() {
    // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO SESSION STORAGE, CASO EXISTA
    let usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
    }

    // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
    // Obtem a string JSON com os dados de usuários a partir do localStorage
    let usuariosJSON = localStorage.getItem('db_usuarios');

    // Verifica se existem dados já armazenados no localStorage
    if (!usuariosJSON) {  // Se NÃO há dados no localStorage
        // Informa sobre localStorage vazio e e que serão carregados os dados iniciais
        //  alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');  //

        // Copia os dados iniciais para o banco de dados 
        db_usuarios = dadosIniciais;

        // Salva os dados iniciais no local Storage convertendo-os para string antes
        localStorage.setItem('db_usuarios', JSON.stringify(dadosIniciais));
    }
    else {  // Se há dados no localStorage
        // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
        db_usuarios = JSON.parse(usuariosJSON);
    }
}

// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser(login, senha) {
    // Verifica todos os itens do banco de dados de usuarios 
    // para localizar o usuário informado no formulario de login
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];

        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (login == usuario.login && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.login = usuario.login;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.nome = usuario.nome;
            usuarioCorrente.senha = usuario.senha; // Certifique-se de que a senha está sendo atribuída corretamente

            // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
            sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));

            // Retorna true para usuário encontrado
            return true;
        }
    }

    // Se chegou até aqui é porque não encontrou o usuário e retorna falso
    return false;
}

// Apaga os dados do usuário corrente no sessionStorage
function logoutUser() {
    usuarioCorrente = {};
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
    window.location = "index.html";
}

function addUser(nome, login, senha, email) {
    // Cria um objeto de usuario para o novo usuario 
    let newId = generateUUID();
    let usuario = { "id": newId, "login": login, "senha": senha, "nome": nome, "email": email };

    // Inclui o novo usuario no banco de dados baseado em JSON
    db_usuarios.usuarios.push(usuario);

    // Salva o novo banco de dados com o novo usuário no localStorage
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));
}

function setUserPass() {
    // Função para configurar senha do usuário (não implementada)
}

// Inicializa as estruturas utilizadas pelo LoginApp
initLoginApp();

if (usuarioCorrente && usuarioCorrente.login) {
    // Função para atualizar o menu do cabeçalho
    function atualizarMenuCabecalho() {
        var menuLogin = document.getElementById('login');
        var menuCadastro = document.getElementById('cadastro');
        if (menuLogin && menuCadastro) {
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

    // Função para exibir mensagem de boas-vindas
    function bemvindo(usuarioCorrente) {
        var cabecalho = document.querySelector('.bemvindo1');
        if (cabecalho && usuarioCorrente && usuarioCorrente.nome) {
            var bem_vindo = document.createElement('div');
            bem_vindo.classList.add('bemvindo');
            bem_vindo.innerHTML = `bem-vindo ${usuarioCorrente.nome}`;
            cabecalho.appendChild(bem_vindo);
        }
    }

    // Chama as funções para atualizar o menu do cabeçalho e exibir mensagem de boas-vindas ao carregar a página
    window.addEventListener('load', () => {
        atualizarMenuCabecalho();
        bemvindo(usuarioCorrente);
    });
}

function exibeUsuarioCorrente() {
    // Cria os itens de lista para o usuário corrente
    let usuario = usuarioCorrente;
    let usuarioLista = `
        <div class="nome">
        <i class="fa-regular fa-note-sticky"></i>
        <li class="usuario-nome">Nome: ${usuario.nome}</li>
        </div>
        <div class="Login">
        <i class="fa-solid fa-user"></i>
        <li class="usuario-login">Login: ${usuario.login}</li>
        </div>
        <div class="email">
        <i class="fa-solid fa-envelope"></i>
        <li class="usuario-email">Email: ${usuario.email}</li>
        </div>
        <div class="senha">
        <i class="fa-solid fa-lock"></i>
        <li class="usuario-senha-password">Senha: ${usuario.senha}</li>
        </div> `;

    // Substitui os itens do corpo da lista com os itens do usuário corrente
    document.getElementById('ul-usuarios').innerHTML = usuarioLista;
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
window.addEventListener('DOMContentLoaded', (event) => {
    // Função para abrir o modal de edição
    function abrirModalEdicao() {
        // Preenche os campos do modal com os dados do usuário corrente
        document.getElementById('editNome').value = usuarioCorrente.nome;
        document.getElementById('editLogin').value = usuarioCorrente.login;
        document.getElementById('editEmail').value = usuarioCorrente.email;
        document.getElementById('editSenha').value = usuarioCorrente.senha;

        // Exibe o modal
        $('#modalEdicao').modal('show');
    }

   // Função para salvar as edições do usuário
function salvarEdicaoUsuario() {
    // Atualiza os dados do usuário corrente com os novos valores dos campos do modal
    usuarioCorrente.nome = document.getElementById('editNome').value;
    usuarioCorrente.login = document.getElementById('editLogin').value;
    usuarioCorrente.email = document.getElementById('editEmail').value;
    usuarioCorrente.senha = document.getElementById('editSenha').value;

    // Atualiza o banco de dados de usuários
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        if (db_usuarios.usuarios[i].id === usuarioCorrente.id) {
            db_usuarios.usuarios[i] = usuarioCorrente;
            break;
        }
    }

    // Salva o banco de dados atualizado no localStorage
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));

    // Atualiza o usuário corrente no sessionStorage
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));

    // Atualiza a exibição do usuário corrente
    exibeUsuarioCorrente();

    // Fecha o modal
    $('#modalEdicao').modal('hide');
}
    

    let btnEditar = document.getElementById('btn_editar');
    if(btnEditar) {
        btnEditar.addEventListener('click', abrirModalEdicao);
    } else {
        console.log("Elemento com id 'btn_editar' não encontrado");
    }

    document.getElementById('btn_salvar_edicao').addEventListener('click', salvarEdicaoUsuario);
});
