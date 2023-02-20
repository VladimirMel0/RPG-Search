const URL = "http://localhost:8070/lista"

const container = document.querySelector("#container")
const enviar = document.querySelector('#JogoSingle');




async function getAllJogos() {


    const response = await fetch(URL);

    const data = await response.json();




    data.map((lista) => {
        container.innerHTML += `
      <div class="JogoSingle" id="JogoSingle" data-id=`+lista.id+`>
      <img id="img" src="/Front/Assets/Dragon.png">
            <table id = "tabela">
                <tr>
                    <td>Nome: `+ lista.name + `</td>
                    <td>Tipo de Jogo: `+ lista.jogo + `</td>
                    <td >Localidade: `+ lista.cep + `</td>                    
                </tr>
            </table>
            <a href="./InfoGames.html?id=`+lista.id+`">Contato</a>
          
            <br>
            </div>
      `
    })

    

}

getAllJogos();

