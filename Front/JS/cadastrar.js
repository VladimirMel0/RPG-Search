const formulario = document.querySelector('#Form');

let name = document.querySelector('#Nome');
let labelName = document.querySelector('#labelNome');
let validName = false;

let email = document.querySelector('#Email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = false;

let cep = document.querySelector('#CEP');
let labelCEP = document.querySelector('#labelCEP');
let validCep = false;


let jogo = document.querySelector('#Games');

let description = document.querySelector('#Msg');
let labelDescription = document.querySelector('#labelMsg');
let validDescription = false;

name.addEventListener('keyup', () => {
    if (name.value.length <= 2) {
        labelName.setAttribute('style', 'color:red')
        labelName.innerHTML = 'Nome'
        name.setAttribute('style', 'border-color: red')
        validName = false
    }
    else {
        labelName.setAttribute('style', 'color:green')
        labelName.innerHTML = 'Nome'
        name.setAttribute('style', 'border-color: green')
        validName = true
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

description.addEventListener('keyup', () => {
    if (description.value.length <= 9) {
        labelDescription.setAttribute('style', 'color:red')
        labelDescription.innerHTML = 'Descrição:'
        description.setAttribute('style', 'border-color: red')
        validDescription = false
    }
    else {
        labelDescription.setAttribute('style', 'color:green')
        labelDescription.innerHTML = 'Descrição:'
        description.setAttribute('style', 'border-color: green')
        validDescription = true
    }
})




function cadastrar() {
    if (validName && validEmail && validCep && validDescription) {

        fetch("http://localhost:8070/cadastro",
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    cep: cep.value,
                    jogo: jogo.value,
                    description: description.value,

                })
            });
    };
};

function limpar() {
    name.value ="";
    email.value = "";
    cep.value = "";
    jogo.value = "";
    description.value = "";

};

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    cadastrar();
    limpar();
});
