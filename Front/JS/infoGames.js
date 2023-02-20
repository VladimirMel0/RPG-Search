// Obtém o valor do parâmetro de consulta "id"
const urlParams = new URLSearchParams(window.location.search);
const jogoId = urlParams.get('id');


// Faz uma requisição HTTP para buscar as informações do produto
fetch(`http://localhost:8070/${jogoId}`)
  .then(response => response.json())
  .then(jogo => {
    
    document.querySelector('#nome').textContent = jogo.name;
    document.querySelector('#email').textContent = jogo.email;

    document.querySelector('#description').textContent = jogo.description;


  })
  .catch(error => {
    console.error('Erro ao buscar informações do produto:', error);
  });