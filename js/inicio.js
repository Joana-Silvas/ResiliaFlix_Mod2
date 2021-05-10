$('#continuar').bind('click', () => { continuar() })

function continuar() {
    window.location.replace("./login.html");
}


$('#criarAcc').bind('click', () => { novaconta() })

function novaconta() {
    window.location.replace("./novaconta.html");
}

$('#recSenha').bind('click', () => { recSenha() })

function recSenha() {
    window.location.replace("./recupAcc.html");
}
