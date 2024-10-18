const divInput = document.querySelector("#divInput");
const divResult = document.querySelector("#divResult");
const divRedivBrancasult = document.querySelector("#divBranca");
const inputCep = document.querySelector("#inputCep");
const inputLogradouro = document.querySelector("#inputLogradouro");
const inputBairro = document.querySelector("#inputBairro");
const inputCidade = document.querySelector("#inputCidade");
const inputUF = document.querySelector("#inputUF");
const btnBuscar = document.querySelector("#btnBuscar");
const btnRetornar = document.querySelector("#btnRetornar");

btnBuscar.addEventListener("click", () => {
    let cep = inputCep.value;
    if(cep != "" && cep.length == 8){
    coletarDadosDosInputs(cep);
    divInput.classList.toggle('esconder');
    divResult.classList.toggle('esconder'); 
    }else{
        alert("Insira um CEP válido")
    }
    
});

btnRetornar.addEventListener("click", ()=>{
    divResult.classList.toggle('esconder');
    divInput.classList.toggle('esconder');

    inputLogradouro.value = '';
    inputBairro.value = '';
    inputCidade.value = '';
    inputUF.value = '';
})

async function coletarDadosDosInputs(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) throw new Error('CEP não encontrado');
        const dados = await response.json();
        ExibirDivResultado(dados);
    } catch (error) {
        alert(error.message);
    }
}

function ExibirDivResultado(dados) {
    inputCep.value = ""
    inputLogradouro.value = dados.logradouro
    inputBairro.value = dados.bairro
    inputCidade.value = dados.localidade
    inputUF.value = dados.uf
}
