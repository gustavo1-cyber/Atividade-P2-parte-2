const nomes = ["Gustavo", "Jonnas", "Evandro", "Josephina", "Rozangela"];
const  lista = document.getElementById("lista")
const input = document.getElementById("inputNome")
const form = document.getElementById("formNome")

const atualizar = () => {
    lista.innerHTML = nomes.map(n => `<li>${n}</li>`).join("");
}


    atualizar();

form.onsubmit =(e) => {
    e.preventDefault();

    if  (input.value.trim() !==""){
        nomes.push(input.value);
        atualizar();
        input.value="";
    }
}