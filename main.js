const form = document.getElementById('form-agenda');
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addRow();
    updateTable();
});

function addRow() {
    const inputNome = document.getElementById('nome-agenda');
    const inputTel =  document.getElementById('tel-agenda');

    if (contatos.includes(inputNome.value)) {
        alert(`O contato ${inputNome.value} já foi adicionado`);
    } else if (numeros.includes(inputTel.value)) {
        alert(`O número ${inputTel.value} já foi adicionado`);
    } else {
        contatos.push(inputNome.value);
        numeros.push(Number(inputTel.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTel.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
    inputNome.value = '';
    inputTel.value = '';
}

function updateTable() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}