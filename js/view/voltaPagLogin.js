$('#entrar').bind('click', () => { continuar() })

function continuar() {
    if (window.location.href.includes("index")){
        window.location.replace("./html/login.html");
    }
    else{
        window.location.replace("../html/login.html");
    }
}
