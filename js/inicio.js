$('#continuar').bind('click', () => { continuar() })

function continuar() {
    window.location.replace("./html/login.html");
}


$('#criarAcc').bind('click', () => { novaconta() })

function novaconta() {
    window.location.replace("./html/novaconta.html");
}

$('#recSenha').bind('click', () => { recSenha() })

function recSenha() {
    window.location.replace("./html/recupAcc.html");
}
