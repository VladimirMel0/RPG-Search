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


  const formulario = document.querySelector('#Form');

  let ownerRef = document.querySelector('#Nome');
  let emailFrom = document.querySelector('#email');
  let emailTo = document.querySelector('#emailFrom');
  let subject = document.querySelector('#H1main')
  let text = document.querySelector('#msg')

  function Msemail() {
        fetch("http://localhost:8090/ms-email",
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                  
                    ownerRef: ownerRef.value,
                    emailFrom: emailFrom.value,
                    emailTo: emailTo.value,
                    subject: subject.value,
                    text: msg.value
                  

                })
            });
    };

function limpar() {
  ownerRef.value ="";
  emailFrom.value = "";
  emailTo.value = "";
  subject.value = "";
  text.value = "";

};

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    cadastrar();
    limpar();
});