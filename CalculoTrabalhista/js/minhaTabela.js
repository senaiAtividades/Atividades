const valorHoraInput = document.querySelector("#valorHoraInput");
const horasTrabalhadasInput = document.querySelector("#horasTrabalhadasInput");
const valeTransporteInput = document.querySelector("#valeTransporteInput");
const outrasDeducoesInput = document.querySelector("#outrasDeducoesInput");
const btnEnviar = document.querySelector("#btnEnviar");
const salarioResult = document.querySelector("#salarioResult");
const descontoInssResult = document.querySelector("#descontoInssResult");
const descontoIrpfResult = document.querySelector("#descontoIrpfResult");
const descontoValeResult = document.querySelector("#descontoValeResult");
const outrasDeducoesResult = document.querySelector("#outrasDeducoesResult");
const salarioLiquidoResult = document.querySelector("#salarioLiquidoResult");

/*--------------------------------------------------------------------------------------*/

btnEnviar.addEventListener("click", () => {
    let valorHora = parseFloat(valorHoraInput.value);
    let horasTrabalhadas = parseFloat(horasTrabalhadasInput.value);
    let descontoVale = 0;
    let outrasDeducoes = parseFloat(outrasDeducoesInput.value);

    //---------------------------INSS------------------------------------------

    let salarioBruto = valorHora * horasTrabalhadas;
    let descontoINSS;
    let faixaSalarialA = 1320 * 0.075;
    let faixaSalarialB = (2751.29 - 1320) * (0.09);
    let faixaSalarialC = (3856.94 - 2571.29) * (0.12);
    let faixaSalarialD = (7507.49 - 3856.94) * (0.14);

    if (salarioBruto <= 1320) {
        descontoINSS = faixaSalarialA
    } else if (salarioBruto >= 1320.01 && salarioBruto <= 2571.29) {
        descontoINSS = faixaSalarialA + ((salarioBruto - 1320) * 0.09)
    } else if (salarioBruto >= 2571.30 && salarioBruto <= 3856.94) {
        descontoINSS = faixaSalarialA + faixaSalarialB + ((salarioBruto - 2571.29) * 0.12)
    } else if (salarioBruto >= 3856.95 && salarioBruto <= 7507.49) {
        descontoINSS = faixaSalarialA + faixaSalarialB + faixaSalarialC + ((salarioBruto - 3856.94) * 0.14)
    } else if (salarioBruto >= 7507.50) {
        descontoINSS = faixaSalarialA + faixaSalarialB + faixaSalarialC + faixaSalarialD + ((salarioBruto - 7507.49) * 0.14)
    }

    //---------------------------IRPF------------------------------------------

    let salariobaseIRPF = salarioBruto - descontoINSS;

    let descontoIRPF

    let aliquotaA = 0.075
    let aliquotaB = 0.15
    let aliquotaC = 0.225
    let aliquotaD = 0.275

    if (salariobaseIRPF >= 0 && salariobaseIRPF <= 2112) {
        descontoIRPF = 0
    } else if (salariobaseIRPF >= 2112.01 && salariobaseIRPF <= 2826.65) {
        descontoIRPF = salariobaseIRPF * aliquotaA - 158.40
    } else if (salariobaseIRPF >= 2826.66 && salariobaseIRPF <= 3751.06) {
        descontoIRPF = salariobaseIRPF * aliquotaB - 370.40
    } else if (salariobaseIRPF >= 3751.07 && salariobaseIRPF <= 4664.68) {
        descontoIRPF = salariobaseIRPF * aliquotaC - 651.73
    } else if (salariobaseIRPF > 4664.68) {
        descontoIRPF = salariobaseIRPF * aliquotaD - 884.96
    }

    if (valeTransporteInput.checked) {
        descontoVale = salarioBruto * 0.06
    }

    let salarioLiquido = salarioBruto - (descontoINSS + descontoIRPF + outrasDeducoes + descontoVale)

    salarioResult.innerHTML = " R$ " + salarioBruto.toFixed(2);
    descontoInssResult.innerHTML = " R$ " + descontoINSS.toFixed(2);
    descontoIrpfResult.innerHTML = " R$ " + descontoIRPF.toFixed(2);
    descontoValeResult.innerHTML = " R$ " + descontoVale.toFixed(2);
    outrasDeducoesResult.innerHTML = " R$ " + outrasDeducoes.toFixed(2);
    salarioLiquidoResult.innerHTML = " R$ " + salarioLiquido.toFixed(2);
})
