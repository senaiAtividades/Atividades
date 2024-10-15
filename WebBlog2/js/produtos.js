const divProdutos = document.querySelector(".divProdutos");

const listaProdutos = [
    {
        id: 1,
        camisa: "imagens/camisaAmarela1.jpg",
        nome: 'Blusa',
        preco: '50,00',
    },
    {
        id: 2,
        camisa: "imagens/camisaCosta.jpg",
        nome: 'Blusa',
        preco: '50,00',
    },
    {
        id: 3,
        camisa: "imagens/camisaAmarela.jpg",
        nome: 'Blusa',
        preco: '50,00',
    },
    {
        id: 4,
        camisa: "imagens/camisaAmarela4.jpg",
        nome: 'Blusa',
        preco: '50,00',
    },
    {
        id: 5,
        camisa: "../imagens/tenisAzul.jpg",
        nome: 'Blusa',
        preco: '50,00',
    },
    {
        id: 6,
        camisa: "../imagens/tenisPreto.jpg",
        nome: 'Blusa',
        preco: '50,00',
    },
    {
        id: 6,
        camisa: "../imagens/tenisBege.jpg",
        nome: 'Blusa',
        preco: '50,00',
    }
];

const carrega = () => {
    listaProdutos.map((elem, i) => {

        const divCard = document.createElement("div");
        divCard.setAttribute("class", "card");

        const imagens = document.createElement("img");
        imagens.setAttribute("class", "image");
        imagens.setAttribute("src", elem.camisa);
        imagens.setAttribute("alt", "Error 404");

        const itemDesc = document.createElement("div");
        itemDesc.setAttribute("class", "itemDesc");
        itemDesc.textContent = elem.nome + " - R$ " + elem.preco;

        const addCarrinho = document.createElement("div");
        addCarrinho.setAttribute("class", "addCarrinho");

        const menosBtn = document.createElement("div");
        menosBtn.setAttribute("id", "menosBtn");
        menosBtn.setAttribute("class", "btnMaisMenos");
        const simboloMenos = document.createElement("i");
        simboloMenos.setAttribute("class", "fa-solid fa-angle-down");

        const input = document.createElement("input");
        input.setAttribute("value", "0");
        input.setAttribute("class", "quant");
        input.setAttribute("id", "inputQuant" + i);

        const maisBtn = document.createElement("div");
        maisBtn.setAttribute("id", "maisBtn");
        maisBtn.setAttribute("class", "btnMaisMenos");
        const simboloMais = document.createElement("i");
        simboloMais.setAttribute("class", "fa-solid fa-angle-up");

        const total = document.createElement("span");
        total.setAttribute("id", "total");

        const btnAdd = document.createElement("button");
        btnAdd.setAttribute("id", "btnAdd");
        btnAdd.textContent = "Add"

        divCard.appendChild(imagens);
        divCard.appendChild(itemDesc);
        divCard.appendChild(addCarrinho);
        divCard.appendChild(btnAdd);

        addCarrinho.appendChild(menosBtn);
        menosBtn.appendChild(simboloMenos);
        addCarrinho.appendChild(input);
        addCarrinho.appendChild(maisBtn);
        maisBtn.appendChild(simboloMais);
        addCarrinho.appendChild(total);

        divProdutos.appendChild(divCard);
    });
}

carrega();
