$('#button-addon2').bind('click', () => { novaconta() })

function novaconta() {
    if (window.location.href.includes("index")){
        window.location.replace("./html/cadastro.html");
    }
    else{
        window.location.replace("../html/cadastro.html");
    }
}