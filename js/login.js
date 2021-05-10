$(".imgSelect").bind('click', () => { login() })

function login() {
    $("#login").css("display", "flex")
}

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

$('#esqueci').bind('click', () => { recupSenha() })

function recupSenha(){
    window.location.replace("./recupAcc.html")
}