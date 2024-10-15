const cliqueAquiLogin = document.querySelector("#cliqueAquiLogin");
const cliqueAqui = document.querySelector("#cliqueAqui");
const divForm = document.querySelector(".divForm");
const divFormLogin = document.querySelector(".divFormLogin");

cliqueAqui.addEventListener("click", () => {
    divForm.classList.add("esconder");
    divFormLogin.classList.remove("esconder");
});

cliqueAquiLogin.addEventListener("click", () => {
    divFormLogin.classList.add("esconder");
    divForm.classList.remove("esconder");
});