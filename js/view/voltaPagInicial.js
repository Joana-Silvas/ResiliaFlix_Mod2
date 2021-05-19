$('#voltar').bind('click', () => { voltar() })

function voltar() {
    if (window.location.href.includes("index")){
        window.location.replace("./html/index.html");
    }
    else{
        window.location.replace("../html/index.html");
    }
}
