$('#searcBtn').bind('click', () => { busca() })

function busca() {
    if (window.location.href.includes("index")){
        window.location.replace("./html/busca.html");
    }
    else{
        window.location.replace("../html/busca.html");
    }
}