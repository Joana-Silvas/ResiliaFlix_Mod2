//Botão para armazenar a id do filme clicado e executar na continuação
$('.filme').bind('click', (e) => { info(e.target.getAttribute("value")) })

//Armazena o id do filme antes de trocar de pag
function info(value) {
    //UNICO JEITO facil que encontrei de armazenar o valor do filme clicado, foi no window.name
    window.name = value
    window.location.replace("../info.html");
}