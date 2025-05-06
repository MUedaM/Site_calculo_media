const form = document.getElementById('form-atividade');
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima: "))

let linhas = '';

const imagemAprovado = '<img src="./images/aprovado.png" alt="Emoji celelebrando" />';
const imagemReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha();
    atualizaTabela();

    calculaMedia();
    atualizaMedia();
})

function arrendond(x) {
    return Math.trunc(x*10)/10;
}

function adicionaLinha() {
    const inputNome = document.getElementById('nome-atividade')
    const inputNota = document.getElementById('nota-atividade')

    if (atividades.includes(inputNome.value)) {
        alert(`A atividade ${inputNome.value} já foi inserida!`)

    } else {      
        atividades.push(inputNome.value);
        notas.push(parseFloat(inputNota.value))

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNota.value}</td>`;
        linha += `<td>${inputNota.value >= notaMinima ? imagemAprovado : imagemReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNome.value = '';
        inputNota.value = '';
    }    
}

function calculaMedia() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return arrendond(somaDasNotas / notas.length);
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia() {
    const mediafinal = calculaMedia()

    document.getElementById('media-valor').innerHTML = mediafinal
    document.getElementById('media-resultado').innerHTML = mediafinal >= notaMinima ? spanAprovado : spanReprovado;
}