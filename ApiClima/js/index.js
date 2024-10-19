const chaveOpenWeather = '40229b7c648a8a22c1407b208e4143cf';
const enedercoHistorico = 'https://history.openweathermap.org/data/2.5/history/city?q={city name},{country code}&type=hour&start={start}&end={end}&appid={API key}'

//const enderecoPrevisao = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${chave}&units=metric&lang=pt`;


const meio = document.querySelector("#meio");
const inputCidade = document.querySelector("#inputCidade");
const btnCidade = document.querySelector("#btnCidade");
const nomeCidade = document.querySelector("#nomeCidade");
const tempAtual = document.querySelector("#tempAtual");
const sensacao = document.querySelector("#sensacao");
const max = document.querySelector("#max");
const min = document.querySelector("#min");
const nuvens = document.querySelector("#nuvens");
const iconeTemps = document.querySelector("#iconeTemps");
const visibilidade = document.querySelector("#visibilidade");
const pressao = document.querySelector("#pressao");
const velocidade = document.querySelector("#velocidade");
const humidade = document.querySelector("#humidade");
const horaAmanhecer = document.querySelector("#horaAmanhecer");
const horaAnoitecer = document.querySelector("#horaAnoitecer");

const dataLocal = document.querySelector("#dataLocal");

const dataHj = new Date();
const opcoes = {
    weekday: 'long', //nome completo do dia
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}
const dataFormatada = dataHj.toLocaleDateString('pt-BR', opcoes);
dataLocal.innerHTML = dataFormatada + ".";

const pegarDadosClimaApi = async (cidade) => {
    const enderecoClima = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveOpenWeather}&units=metric&lang=pt`

    const res = await fetch(enderecoClima);
    const data = await res.json();
    console.log(data);

    return data;
}

const mostrarDadosClimaApi = async (cidade) => {
    const data = await pegarDadosClimaApi(cidade);
    if (data && data.name) {
        nomeCidade.innerText = data.name + ".";
        tempAtual.innerText = data.main.temp.toFixed(0) + "°C";
        sensacao.innerText = data.main.feels_like.toFixed(0) + "°C";
        max.innerText = data.main.temp_max.toFixed(0) + "°C";
        min.innerText = data.main.temp_min.toFixed(0) + "°C";
        nuvens.innerText = data.weather[0].description;
        iconeTemps.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);

        /*divVento*/
        visibilidade.innerHTML = data.visibility / 1000 + " Kms";
        pressao.innerHTML = data.main.pressure + " hPa";
        velocidade.innerHTML = data.wind.speed.toFixed(1) + " m/s";
        humidade.innerHTML = data.main.humidity + " %";

        /*Sol*/
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        // Exibir amanhecer e anoitecer
        horaAmanhecer.innerText = sunrise;
        horaAnoitecer.innerText = sunset;

    } else {
        nomeCidade.innerText = "Cidade não encontrada";
    }
}

inputCidade.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        executar();
    }
});

btnCidade.addEventListener("click", () => {
    executar();
})

const executar = () => {
    let cidade = inputCidade.value;
    if (cidade != "") {
        pegarDadosClimaApi(cidade);
        mostrarDadosClimaApi(cidade);
        meio.style.display = 'flex';

    } else {
        alert("Insira uma cidade.");
    }
    inputCidade.value = "";
}

