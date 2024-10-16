// contato
const menuContato = document.querySelector("#menuContato");
const divContato = document.querySelector("#divContato");
const inputNome = document.querySelector("#inputNome");
const inputEmail = document.querySelector("#inputEmail");
const inputMensagem = document.querySelector("#inputMensagem");

menuContato.addEventListener("click", () => {
    divContato.style.display = 'block'

    setTimeout(() => {
        divContato.style.opacity = 1;
    }, 10)
})

const fecharForm = () => {
    inputNome.value = "";
    inputEmail.value = "";
    inputMensagem.value = "";
    divContato.style.display = 'none';
    divContato.style.opacity = 0;
}

const btnContato = document.querySelector("#btnContato");

btnContato.addEventListener("click", () => {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const mensagem = inputMensagem.value.trim();
    
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    
    const remetente = encodeURIComponent(`Mensagem de ${nome}`);
    const conteudo = encodeURIComponent(`Nome: ${nome}\nEmail para Contato: ${email}\nMensagem: \n${mensagem}`);
    
    const mailtoLink = `mailto:alvaro.l.gomes@aluno.senai.br?subject=${remetente}&body=${conteudo}`;
    
    window.location.href = mailtoLink;

    fecharForm();
});


// mudar cores background
const bckColor = document.querySelector("#bckColor");
const backVermelho = document.querySelector("#backVermelho");
const backVerde = document.querySelector("#backVerde");
const backAqua = document.querySelector("#backAqua");

backVermelho.addEventListener("click", () => {
    bckColor.style.background = '#fc2b1c'
})

backVerde.addEventListener("click", () => {
    bckColor.style.background = 'rgb(149, 243, 27)'
})

backAqua.addEventListener("click", () => {
    bckColor.style.background = '#09eaf1'
})

// slides
const divProjetos = document.querySelector("#divProjetos");
const projetoContainer = document.querySelector("#projetoContainer");
const cardProj = document.querySelector("#cardProj");

const slide = document.querySelector('.slide');
const proxPag = document.querySelector("#proxPag");

let index = 0;
let totalSlides = document.querySelectorAll('.slide').length;

const passarPag = ()=>{
    index = (index + 1 + totalSlides) % totalSlides;
    projetoContainer.style.transform = 'translateX(' + (-index * 100) + '%)';
} 

proxPag.addEventListener("click", () => {

    passarPag();

})
