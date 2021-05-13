//retorna o objeto
function pegaFilmes(filme, numeroDOM) {
    $.ajax({
        url: ("http://www.omdbapi.com/?i=" + filme + "&apikey=c145d58b"),
        success: function (result) {
                usaApi(result, numeroDOM)
        },
    });
}