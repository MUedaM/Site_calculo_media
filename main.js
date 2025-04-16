const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario')

let validaForm = false;

function validaNome(nomeCompleto) {
    const nomeArray = nomeCompleto.split(' ')
    return nomeArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numeroConta = document.getElementById('numero-conta')
    const valorDepositado = document.getElementById('valor-depositado')
    const mensagemDescricao = document.getElementById('descricao')
    const mensagemSucesso = `Montante no valor: <b>R$ ${valorDepositado.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`

    validaForm = validaNome(nomeBeneficiario.value)
    if (validaForm) {
        const displayMensagemSucesso = document.querySelector('.sucesso-mensagem');
        displayMensagemSucesso.innerHTML = mensagemSucesso;
        displayMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDepositado.value = '';
        mensagemDescricao.value = '';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    validaForm = validaNome(e.target.value);

    if(validaForm) {
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.erro-mensagem').style.display = 'none'
    } else {
        nomeBeneficiario.classList.add('error')
        document.querySelector('.erro-mensagem').style.display = 'block'
    }
})