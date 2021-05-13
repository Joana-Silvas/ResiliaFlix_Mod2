$('#botao').bind('click', () => { cadastrar() })

function cadastrar() {
    let email = $("#femail")[0]
    let rg = $("#frg")[0]
    let senha = $("#fsenha")[0]
    let confirm = $("#fconfirm")[0]

    let CEP = $("#fcep")[0]
    let numero = $("#fnumero")[0]
    let rua = $("#frua")[0]

    if (email.value.indexOf("@") < 1) {
        alert("Email inválido")
    }
    else if (senha.value != confirm.value) {
        alert("Favor verificar confirmação de senha")
    }
    else if (rg.value.length != 9) {
        alert("Verificar RG, o campo deve ter 9 dígitos")
    }
    else if (email.value == "" || rg.value == "" || senha.value == "" || CEP.value == "" || numero.value == "" || rua.value == ""){
        alert("Não deixar campos em branco")
    }
    else { alert("Cadastro realizado com sucesso") }
}
