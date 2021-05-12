//Botão para voltar ao inicio
$('#inicio').bind('click', () => { inicio() })

function inicio() {
    window.location.replace("../index.html");
}

//Botão para voltar ao catalogo
$('#home').bind('click', () => { home() })

function home() {
    window.location.replace("./catalogo.html");
}

//Função para buscar o objeto JSON da API
//minha chave apikey=c145d58b
function pegaFilmes(filme, numeroDOM) {
    $.ajax({
        url: ("http://www.omdbapi.com/?i=" + filme + "&apikey=c145d58b"),
        success: function (result) {
            if (window.location.href.includes("catal") == true) {
                usaApiCat(result, numeroDOM)
            }
            else {
                console.log(filme)
                usaApiInfo(result)
            }
        },
    });
}

//Função para usar o objeto e incluir no catálogo
function usaApiCat(result, numeroDOM) {
    if (result.Poster == "N/A") {
        pegaFilmes("tt" + geraID(), numeroDOM)
    }
    else if (result.Response == "False") {
        pegaFilmes("tt" + geraID(), numeroDOM)
    }
    else {
        $("#filme" + numeroDOM).attr("src", result.Poster)
        $("#filme" + numeroDOM).attr("value", result.imdbID)
    }
}

//Função para gerar id aleatório
function geraID() {
    let numero = Math.floor(Math.random() * 9999999)
    numero = numero + ""
    if (numero.length < 7) {
        while (numero.length < 7) {
            numero = "0" + numero
        }
    }
    console.log(numero)
    return numero
}

//Executa posteres do catálogo
if (window.location.href.includes("catal")) {
pegaFilmes("tt12361974", 1)
pegaFilmes("tt0245429", 2)
pegaFilmes("tt2096673", 3)
pegaFilmes("tt0119698", 4)
pegaFilmes("tt0076759", 5)
pegaFilmes("tt0133093", 6)
pegaFilmes("tt" + geraID(), 7)
pegaFilmes("tt" + geraID(), 8)
pegaFilmes("tt" + geraID(), 9)
pegaFilmes("tt" + geraID(), 10)
pegaFilmes("tt" + geraID(), 11)
pegaFilmes("tt" + geraID(), 12)
}

//Botão para armazenar a info do filme clicado e executar na continuação
$('.filme').bind('click', (e) => { info(e.target.id, e.target.getAttribute("value")) })

//Armazena o id do filme antes de trocar de pag
function info(idDom, value) {
    //UNICO JEITO facil que encontrei de armazenar o valor do filme clicado, foi no window.name
    window.name = value
    vaiPraInfo()
}

//Troca o HTML para a info
function vaiPraInfo (){
    window.location.replace("./info.html");
}

//ao iniciar o documento, verificar se está no catalogo ou info e executa os DOMs corretos
if (window.location.href.includes("catal")==false) {
    console.log(window.location.href)
    pegaFilmes(window.name)
}

//Troca infos da Informação
function usaApiInfo(result) {
        $("#poster").attr("src", result.Poster)
        $("#titulo").html(result.Title)
        $("#ano").html(result.Year)
        $("#duracao").html(result.Runtime)
        $("#genero").html(result.Genre)
        $("#diretor").html(result.Director)
        $("#resumo").html(result.Plot)
}