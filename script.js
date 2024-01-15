const form = document.querySelector("form")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    addLinha()
})

function addLinha() {
    let nome = document.querySelector("#nome").value
    let telefone = document.querySelector("#telefone").value
    let linha = document.createElement("tr")
    let tdnome = document.createElement("td")
    let tdtelefone = document.createElement("td")

    tdnome.innerText = nome
    tdtelefone.innerText = telefone

    linha.appendChild(tdnome)
    linha.appendChild(tdtelefone)

    let tbody = document.querySelector("tbody")
    tbody.appendChild(linha)

}