//INPUTS
const inputPlaca = document.querySelector("#inputPlaca")
const inputInicio = document.querySelector("#inputInicio")
const inputFinal = document.querySelector("#inputFinal")

//BOTOES
const btnCalc = document.querySelector("#btnCalc")
const btnTurnoInicio = document.querySelector("#btnTurnoInicio")
const btnTurnoFim = document.querySelector("#btnTurnoFim")

//RELATORIOS
const menorVelShow = document.querySelector("#menorVelShow")
const maiorVelShow = document.querySelector("#maiorVelShow")
const mediaVelShow = document.querySelector("#mediaVelShow")
const totalValoresShow = document.querySelector("#totalValoresShow")
const horaInicialShow = document.querySelector("#horaInicialShow")
const horaFinalShow = document.querySelector("#horaFinalShow")

//IMPRESSAO
const placaPrint = document.querySelector("#placaPrint")
const horaEntradaPrint = document.querySelector("#horaEntradaPrint")
const horaSaidaPrint = document.querySelector("#horaSaidaPrint")
const tempoGastoPrint = document.querySelector("#tempoGastoPrint")
const velMediaPrint = document.querySelector("#velMediaPrint")
const pagamentoPrint = document.querySelector("#pagamentoPrint")

///////////////////////////////////////////////////////////////////////////////////

const distancia = 120
const tarifa = 20
let dataInicioTurno
let dataFimTurno
btnCalc.disabled = true;
btnTurnoFim.disabled = true;

let listaVelocidade = []
let listaValor = []

const addItemVelocidade = (objVel) => {
    listaVelocidade.push(objVel)
}

const addItemValor = (objVal) => {
    listaValor.push(objVal)
}

btnTurnoInicio.addEventListener("click", () => {
    dataInicioTurno = new Date()
    btnCalc.disabled = false;
    btnCalc.style.color = "#eeeeee";
    btnTurnoFim.disabled = false;
    btnTurnoFim.style.color = "#eeeeee";
})

btnTurnoFim.addEventListener("click", () => {



    dataFimTurno = new Date()
    let maiorVel = 0
    let totalValor = 0
    let menorVel = 999

    for (let i = 0; i < listaVelocidade.length; i++) {

        if (listaVelocidade[i] > maiorVel) {
            maiorVel = listaVelocidade[i]
        }

        if (listaVelocidade[i] < menorVel) {
            menorVel = listaVelocidade[i]
        }

    }

    for (let i = 0; i < listaValor.length; i++) {
        totalValor += listaValor[i]
    }

    let mediaVel = (maiorVel + menorVel) / 2
    menorVelShow.innerHTML = " " + menorVel.toFixed(2) + " Kmh"
    maiorVelShow.innerHTML = " " + maiorVel.toFixed(2) + " Kmh"
    mediaVelShow.innerHTML = " " + mediaVel.toFixed(2) + " Kmh"
    totalValoresShow.innerHTML = " R$ " + totalValor.toFixed(2).replace(".", ",")
    horaInicialShow.innerHTML = " " + dataInicioTurno.getHours() + ":" + dataInicioTurno.getMinutes()
    horaFinalShow.innerHTML = " " + dataFimTurno.getHours() + ":" + dataFimTurno.getMinutes()

    btnTurnoFim.disabled = true;
    btnTurnoFim.style.color = "#9e9d9d";
    btnCalc.disabled = true;
    btnCalc.style.color = "#9e9d9d";
})

btnCalc.addEventListener("click", () => {
    let placa = inputPlaca.value;
    let horaA = inputInicio.value;
    let horaB = inputFinal.value;
    let desconto = 0;

    if (!placa || !horaA || !horaB) {
        alert("Preencha os campos.")
    } else {
        //tempo
        let dataA = new Date();
        let dataB = new Date();

        let horaASplit = horaA.split(":");
        let horaBSplit = horaB.split(":");

        dataA.setHours(parseInt(horaASplit[0]), parseInt(horaASplit[1]), 0);

        dataB.setHours(parseInt(horaBSplit[0]), parseInt(horaBSplit[1]), 0);

        if (dataB < dataA) {
            dataB.setDate(dataB.getDate() + 1);
        }

        let tempo = (dataB - dataA) / 1000;

        tempo = tempo / 60 / 60;

        let velocidade = distancia / tempo;

        console.log("hora: " + horaA + " hora(s)");
        console.log("Tempo: " + tempo.toFixed(1) + " hora(s)");
        console.log("Velocidade: " + velocidade + " km/h");

        //pagamento
        if (velocidade <= 60) {
            desconto = tarifa * 0.15;
        } else if (velocidade > 60 && velocidade <= 100) {
            desconto = tarifa * 0.10;
        } else if (velocidade > 100) {
            desconto = 0
        }

        let pagamento = tarifa - desconto
        //impressao
        placaPrint.innerHTML = placa;
        horaEntradaPrint.innerHTML = horaA;
        horaSaidaPrint.innerHTML = horaB;
        tempoGastoPrint.innerHTML = tempo.toFixed(1) + " hora(s)";
        velMediaPrint.innerHTML = velocidade.toFixed(1) + " km/h";
        pagamentoPrint.innerHTML = "R$ " + pagamento.toFixed(2).replace(".", ",");

        let itemVelocidade = velocidade
        let itemValor = pagamento
        addItemVelocidade(itemVelocidade)
        addItemValor(itemValor)

        inputPlaca.value = ""
        inputInicio.value = ""
        inputFinal.value = ""
    }

});