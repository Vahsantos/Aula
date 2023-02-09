
// recebe salario
function recebeSalario(valida) {
    let salario = prompt("Digite aqui seu salário:");
    if (valida(salario)) return salario;

    return recebeSalario(valida)
}

// valida salario
function validaSalario(salario) {
    if (Number(salario) && !isNaN(salario)) {
        return true
    }
    return false
}

// retorna a aliquota calculada
function recebeAliquota(salario) {
    if (salario <= 1903.98) return false;
    if (salario >= 1903.99 && salario <= 2826.65) return salario * 0.075 - 142.80;
    if (salario >= 2826.66 && salario <= 3751.05) return salario * 0.15 - 354.80;
    if (salario >= 3751.06 && salario <= 4664.68) return salario * 0.225 - 636.13;
    if (salario >= 4664.68) return salario * 0.275 - 869.36;

    // quando não se encaixa em nenhum dos if's
    alert("Ops... como você chegou aqui? contate o administrador.")
}

// exibe valor a pagar (aliquota)
function exibeAliquota(aliquota) {
    alert(aliquota)
}

// formata para dinheiro
function formataReal(valor = 0) {
    return valor.toLocaleString('pt-BR', {
        currency: "BRL",
        style: "currency"
    })
}

// processa imposto de renda
function processaImpostoRenda(salarioDigitado, aliquota, exibe, formata) {
    let valorPagar = aliquota(salarioDigitado);
    if (!valorPagar) {
        return exibe('Insento')
    }

    exibe(`Você deve pagar: ${formata(valorPagar)}`)
}

// como deve executar
processaImpostoRenda(recebeSalario(validaSalario), recebeAliquota, exibeAliquota, formataReal);