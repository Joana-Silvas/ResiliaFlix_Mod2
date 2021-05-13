$('#botao').bind('click', () => { entrar() })

function entrar() {
    let email = $("#femail")[0]
    let senha = $("#fsenha")[0]

    if (email.value.indexOf("@") < 1) {
        alert("Email inválido")
    }
    else if (senha.value == ""){
        alert("Favor digite sua senha")
    }
    else{
        window.location.replace("./catalogo.html")
    }
}

