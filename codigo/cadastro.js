function validateForm() {
    var firstName = document.getElementById("first-name").value.trim();
    var lastName = document.getElementById("last-name").value.trim();
    var email = document.getElementById("email").value.trim();
    var weight = document.getElementById("weight").value.trim();
    var height = document.getElementById("height").value.trim();
    var gender = document.getElementById("gender").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Validar se algum item não foi preenchido
    if (firstName === "" || lastName === "" || email === "" || weight === "" || height === "" || gender === "none" || password === "" || confirmPassword === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validar senha e confirmação de senha 
    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, digite novamente.");
        return;
    }

    // Enviar formulário após a validação
    submitForm();
}

function submitForm() {
    var userData = {
        "firstName": document.getElementById("first-name").value,
        "lastName": document.getElementById("last-name").value,
        "email": document.getElementById("email").value,
        "weight": document.getElementById("weight").value,
        "height": document.getElementById("height").value,
        "gender": document.getElementById("gender").value,
        "password": document.getElementById("password").value
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Cadastro realizado com sucesso!");

    // Redireciona para o cadastro de interesse
    setTimeout(function() {
        window.location.href = "cadastrointeresse.html";
    }, 2000); // 2000 milissegundos = 2 segundos
}