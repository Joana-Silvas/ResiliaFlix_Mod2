function preencheCEP(apidocarai) {
    $("#festado").val(apidocarai.uf)
    $("#fcidade").val(apidocarai.localidade)
    $("#fbairro").val(apidocarai.bairro)
    $("#frua").val(apidocarai.logradouro)
}