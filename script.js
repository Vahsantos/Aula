
let soma =(primeiroNumero = 0, segundo = 0)

let somaV2 = (primeiroNumero = 0, segundo = 0)

let somaV3 = (primeiroNumero = 0, segundo = 0)


console.log(soma(soma(1,2)))
console.log(somaV2(soma(1,2)))
console.log(somaV3(soma(1,2)))

/* uso  simples da arrow function */

let exibeMensagem = (mensagem) => console.log(mensagem)
exibeMensagem('Oi')
exibeMensagem('Sumido')

/* Funçoes de CALLBACK*/ 
function recebeMensagem (callback){
    let mensagem = (prompt('digite uma mensagem carinhosa'))
 exibeMensagem(mensagem)

}
recebeMensagem(exibeMensagem)