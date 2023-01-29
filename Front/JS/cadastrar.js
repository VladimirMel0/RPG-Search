const formulario = document.querySelector('#Form');

let nome = document.querySelector('#Nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let email = document.querySelector('#Email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = false;

let cep = document.querySelector('#CEP');
let labelCEP = document.querySelector('#labelCEP');
let validCep = false;


let games = document.querySelector('#Games');

let msg = document.querySelector('#Msg');
let labelMsg = document.querySelector('#labelMsg');
let validMsg = false;

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color:red')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    }
    else {
        labelNome.setAttribute('style', 'color:green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

email.addEventListener('keyup', () => {
    if (email.value.length <= 7) {
        labelEmail.setAttribute('style', 'color:red')
        labelEmail.innerHTML = 'email'
        email.setAttribute('style', 'border-color: red')
        validEmail = false
    }
    else {
        labelEmail.setAttribute('style', 'color:green')
        labelEmail.innerHTML = 'email'
        email.setAttribute('style', 'border-color: green')
        validEmail = true
    }
})

cep.addEventListener('keyup', () => {
    if (cep.value.length <= 7) {
        labelCEP.setAttribute('style', 'color:red')
        labelCEP.innerHTML = 'CEP'
        cep.setAttribute('style', 'border-color: red')
        validCep = false
    }
    else {
        labelCEP.setAttribute('style', 'color:green')
        labelCEP.innerHTML = 'CEP'
        cep.setAttribute('style', 'border-color: green')
        validCep = true
    }
})

msg.addEventListener('keyup', () => {
    if (msg.value.length <= 9) {
        labelMsg.setAttribute('style', 'color:red')
        labelMsg.innerHTML = 'Descrição:'
        msg.setAttribute('style', 'border-color: red')
        validMsg = false
    }
    else {
        labelMsg.setAttribute('style', 'color:green')
        labelMsg.innerHTML = 'Descrição:'
        msg.setAttribute('style', 'border-color: green')
        validMsg = true
    }
})




function cadastrar() {
    if (validNome && validEmail && validCep && validMsg) {

        fetch("http://localhost:8070/cadastro",
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    nome: nome.value,
                    email: email.value,
                    cep: cep.value,
                    games: games.value,
                    msg: msg.value,

                })
            });
    };
};

function limpar() {
    nome.value = "";
    email.value = "";
    cep.value = "";
    games.value = "";
    msg.value = "";

};

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    cadastrar();
    limpar();
});
