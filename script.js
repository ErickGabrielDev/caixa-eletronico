var saldo = 100.5; //Float
var nome = (prompt('Qual é o seu nome?'));
function inicio() {

    var escolha = parseInt(prompt('Olá ' + nome + ', é um prazer ter você por aqui!' + '\nSelecione uma opção \n 1) Saldo\n 2) Extrato\n 3) Saque\n 4) Depósito\n 5) Transfêrencia\n 6) Sair'));

    switch (escolha) {
        case 1:
            senha();
            ver_saldo();
            break;
        case 2:
            senha();
            ver_extrato();
            break;
        case 3:
            senha();
            fazer_saque();
            break;
        case 4:
            senha();
            fazer_deposito();
            break;
        case 5:
            senha();
            fazer_transferencia();
            break;
        case 6:
            senha();
            sair();
            break;
        default:
            erro();
    }
}

function ver_saldo() {
    alert('Seu saldo atual é: ' + saldo);
    inicio();
}

function senha() {
    var senha = (prompt('Insira sua senha'));
    while (senha !== "2584") {
        alert('Senha incorreta');
        senha = (prompt('Digite novamente'));
    }
}

function ver_extrato() {
    alert('25/03 - PIX | Ponto A -> -150.00\n' +
        '26/03 - Débito | burguer King -> -50.00\n' +
        '26/03 - Débito | Rossi -> -34.99\n' +
        '26/03 - Débito | banca de jornal -> -25.00\n' +
        '30/03 - Crédito | Uber -> -15.70\n' +
        '30/03 - PIX | Gabriel Augusto -> +10.000\n' +
        '31/03 - Crédito | Geronimo -> -200.00\n' +
        '01/04 - PIX | deí pipas -> -250.00\n' +
        '\nSaldo Atual: R$ ' + saldo);
    inicio();
}

function fazer_deposito() {
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    // Not a Number
    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe um número:');
        fazer_deposito();
    } else if (deposito <= 0) {
        alert('Opção não autorizada');
        fazer_deposito();
    } else {
        saldo += deposito;
        ver_saldo();
    }
}

function fazer_transferencia() {
    var conta = parseFloat(prompt('Qual o número da conta?'));

    if (isNaN(conta) || conta === '') {
        alert('Por favor, informe um número válido.');
        fazer_transferencia();
    } else {
        var transferencia = parseFloat(prompt('Qual o valor a ser transferido?'));
        if (transferencia > saldo || transferencia <= 0) {
            alert('Opção não autorizada');
            fazer_transferencia();
        } else {
            saldo -= transferencia;
            ver_saldo();
        }
    }
}

function fazer_saque() {
    var saque = parseFloat(prompt('Qual o valor para saque?'));

    if (isNaN(saque) || saque === '') {
        alert('Por favor, informe um número válido.');
        fazer_saque();
    } else if (saque > saldo || saque <= 0) {
        alert('Opção não autorizada');
        fazer_saque();
    } else {
        saldo -= saque;
        ver_saldo();
    }
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        window.close();
    } else {
        inicio();
    }
}



inicio();
