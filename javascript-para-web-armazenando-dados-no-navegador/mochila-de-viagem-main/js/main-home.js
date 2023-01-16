const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach( (element) => {
    createElement(element);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = event.target.elements['nome'];
    const quantidade = event.target.elements['quantidade'];
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    const existe = itens.find(element => element.nome === nome.value);

    if (existe) {
        itemAtual.id = existe.id;

        refreshElement(itemAtual);

        itens[itens.findIndex(element => element.id === existe.id)] = itemAtual;
    } else {
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0;

        createElement(itemAtual);

        itens.push(itemAtual);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
})

function createElement(item) {
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(deleteButton(item.id));
    
    lista.appendChild(novoItem);   
}

function refreshElement(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
}

function deleteButton(id) {
    const buttonElement = document.createElement("button");
    buttonElement.innerHTML = "X";

    buttonElement.addEventListener("click", function() {
        deleteElement(this.parentNode, id);
    })

    return buttonElement;
}

function deleteElement (tag, id) {
    tag.remove();

    itens.splice(itens.findIndex(element => element.id === id), 1);

    localStorage.setItem("itens", JSON.stringify(itens));
}