//Troca infos da Informação
function usaApi(result) {
    $("#poster").attr("src", result.Poster)
    $("#titulo").html(result.Title)
    $("#ano").html(result.Year)
    $("#duracao").html(result.Runtime)
    $("#genero").html(result.Genre)
    $("#diretor").html(result.Director)
    $("#resumo").html(result.Plot)
}