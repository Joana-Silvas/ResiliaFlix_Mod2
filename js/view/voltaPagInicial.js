$('#voltar').click( () => { voltar() })

function voltar() {
    if (window.location.href.includes("index")){
        window.location.replace("./index.html");
    }
    else{
        window.location.replace("../index.html");
    }
}
