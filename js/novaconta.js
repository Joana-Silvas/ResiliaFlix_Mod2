$('#voltar').bind('click', () => { voltar() })

function voltar() {
    window.location.replace("../index.html");
}

$('#botao').bind('click', () => { cadastrar() })

function cadastrar() {
    let email = $("#femail")[0]
    let rg = $("#frg")[0]
    let senha = $("#fsenha")[0]
    let confirm = $("#fconfirm")[0]

    if (email.value.indexOf("@") < 1) {
        alert("Email inválido")
    }
    else if (senha.value != confirm.value) {
        alert("Favor verificar confirmação de senha")
    }
    else if (rg.value.length != 9) {
        alert("Verificar RG, o campo deve ter 9 dígitos")
    }
    //verificar campos vazios nao checando no jquery
    else if (email.value == "" || rg.value == "" || senha.value == "" || $("#fcep").val == "" || $("#fnumero").val == "" || $("#frua").val == ""){
        alert("Não deixar campos em branco")
    }
    else { alert("Cadastro realizado com sucesso") }
}

$("#fcep").bind("keyup", () => pegaCEP())

function pegaCEP() {
    let CEP = $("#fcep")[0]
    if (CEP.value.length == 8) {
        $.ajax({
            url: ("https://viacep.com.br/ws/" + CEP.value + "/json/"),
            success: function (result) {
                console.log(result)
                preencheCEP(result)
            }
        });
    }
}

function preencheCEP(apidocarai) {
    $("#festado").val(apidocarai.uf)
    $("#fcidade").val(apidocarai.localidade)
    $("#fbairro").val(apidocarai.bairro)
    $("#frua").val(apidocarai.logradouro)
}