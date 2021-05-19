$('#enviar').bind('click', () => { login() })

function login() {
    let email = $("#email")[0]

    if (email.value.indexOf("@") < 0) {
        alert("Favor digitar um email válido ou clicar em: Precisa de ajuda?")
    }
    else {
        window.location.replace("../index.html");
    }
}
