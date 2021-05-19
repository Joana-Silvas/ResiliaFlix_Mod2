$('#contato').bind('click', () => { contato() })

function contato() {
    if (window.location.href.includes("index")){
        window.location.replace("./html/contato.html");
    }
    else{
        window.location.replace("../html/contato.html");
    }
}