//usar o objeto e inclui no catálogo
function usaApi(result, numeroDOM) {
        $("#filme" + numeroDOM).attr("src", result.Poster)
        $("#filme" + numeroDOM).attr("value", result.imdbID)
}