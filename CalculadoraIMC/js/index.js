const inputNome = document.querySelector("#inputNome")
const radioM = document.querySelector("#radioM")
const radioF = document.querySelector("#radioF")
const inputPeso = document.querySelector("#inputPeso")
const inputAltura = document.querySelector("#inputAltura")
const btnCalc = document.querySelector("#btnCalc")
const divResult = document.querySelector("#divResult")
const condicao = document.querySelector("#condicao")
const divFalta = document.querySelector("#divFalta")

btnCalc.addEventListener("click", () => {
    let nome = inputNome.value
    let peso = parseFloat(inputPeso.value)
    let altura = parseFloat(inputAltura.value)


    let IMC = (peso / (altura * altura))
    let pesoNormal = (altura * altura) * 25.0

    divResult.innerHTML = IMC.toFixed(1)

    let falta = 0
    if (radioM.checked) {
        if (IMC < 20.7) {
            falta = pesoNormal - peso
            condicao.innerHTML = "Você está abaixo do peso."
            divFalta.innerHTML = nome.toUpperCase() + ", você precisa ganhar " + falta.toFixed(1) + " Kgs."
        } else if (IMC >= 20.7 && IMC <= 26.4) {
            condicao.innerHTML = "Você está no peso normal."
        } else if (IMC >= 26.4 && IMC <= 27.8) {
            falta = peso - pesoNormal
            condicao.innerHTML = "Um pouco acima do peso."
            divFalta.innerHTML = nome.toUpperCase() + ", você precisa perder " + falta.toFixed(1) + " Kgs."
        } else if (IMC >= 27.8 && IMC <= 31.1) {
            falta = peso - pesoNormal
            condicao.innerHTML = "Acima do peso."
            divFalta.innerHTML = nome.toUpperCase() + ", você precisa perder " + falta.toFixed(1) + " Kgs."
        } else if (IMC > 31.1) {
            falta = peso - pesoNormal
            condicao.innerHTML = "Você está obeso."
            divFalta.innerHTML = nome.toUpperCase() + ", você precisa perder " + falta.toFixed(1) + " Kgs."
        }
    } else if (radioF.checked) {
        if (IMC < 19.1) {
            falta = pesoNormal - peso
            condicao.innerHTML = "Você está abaixo do peso."
            divFalta.innerHTML = nome.toUpperCase() + ", você precisa ganhar " + falta.toFixed(1) + " Kgs."
        } else if (IMC >= 19.1 && IMC <= 25.8) {
            condicao.innerHTML = "Você está no peso normal."
        } else if (IMC >= 25.8 && IMC <= 27.3) {
            falta = peso - pesoNormal
            condicao.innerHTML = "Um pouco acima do peso."
            divFalta.innerHTML = nome.toUpperCase() + ", você precisa perder " + falta.toFixed(1) + " Kgs."
        } else if (IMC >= 27.3 && IMC <= 32.3) {
            falta = peso - pesoNormal
            condicao.innerHTML = "Acima do peso."
            divFalta.innerHTML = nome.toUpperCase() + ", você precisa perder " + falta.toFixed(1) + " Kgs."
        } else if (IMC > 32.3) {
            falta = peso - pesoNormal
            condicao.innerHTML = "Você está obesa."
            divFalta.innerHTML = nome.toUpperCase() + ", você precisa perder " + falta.toFixed(1) + " Kgs."
        }
    }
})

