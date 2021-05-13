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

