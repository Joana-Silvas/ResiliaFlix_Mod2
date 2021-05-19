$('#searcBtn').bind('click', () => { start() })

function start() {

    $("#form").submit(function (event) {
        event.preventDefault()

        let footer = document.querySelector("footer")

        var url = "http://www.omdbapi.com/?apikey=54512563";
        var movie = $("#texto").val();

        $.ajax({
            method: 'GET',
            url: url + "&t=" + movie,
            success: function (data) {
                console.log(data);

                result =//coloca o resultado da busca dentro da div
                    ` <img class="img" src="${data.Poster}">
                <h2>Titulo: ${data.Title}</h2>
                <h2>País: ${data.Country}</h2>
                <h2>Estreou em: ${data.Released}</h2>
                <h2>Ano: ${data.Year}</h2>
                <h2>Diretor: ${data.Director}</h2>                                
                <h2>Atores: ${data.Actors}</h2>
                <h2>Genero: ${data.Genre}</h2>
                <h2>Resumo: ${data.Plot}</h2>                                      
                `;
                //retorna o erro de nao encontrado
                if (data.Response == "False" || data.Error == "Movie Not Found!") {
                    result = `<h2>Filme não encontrado, verifique a digitação </h2>`;
                    footer.setAttribute("class", "p-5 bottom fixed-bottom bottom-0")
                }
                else {
                    footer.setAttribute("class", "p-5 bottom relative-bottom bottom-0")
                }
                $("#resultado").html(result);


            },


        })

    })
}

