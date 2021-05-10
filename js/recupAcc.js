$('#voltar').bind('click', () => { voltar() })

function voltar() {
    window.location.replace("../index.html");
}

$('#botao').bind('click', () => { recuperar() })

function recuperar() {
    let email = $("#femail")[0]

    if (email.value.indexOf("@") < 0) {
        alert("Favor digitar um email válido")
    }
    else {
        alert("Um link para recuperação de sua conta foi enviado para seu email")
    }
}