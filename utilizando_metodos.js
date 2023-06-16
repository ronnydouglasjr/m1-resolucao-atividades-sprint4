// Exercício 1

function substituirPalavra(frase, palavraAntiga, palavraNova) {
  // Substitui todas as ocorrências da palavra antiga pela nova usando o método replaceAll() da string
  const novaFrase = frase.replaceAll(palavraAntiga, palavraNova);

  // Retorna a nova frase
  return novaFrase;
}

// Exercício 2

function calcularMedia(nota1, nota2, nota3) {
  // Calcula a média aritmética das notas e arredonda para uma casa decimal usando o método toFixed() do número
  const media = ((nota1 + nota2 + nota3) / 3).toFixed(1);

  // Retorna uma mensagem com a média do aluno
  return `A média do aluno é ${media}.`;
}

// Exercício 3

function calcularValorTotal(valorUnitario, quantidade) {
  let valorTotal; // declaração da variável para o valor total

  if (quantidade >= 10) {
    // verifica se a quantidade comprada é maior ou igual a 10
    valorTotal = (valorUnitario * quantidade * 0.8).toFixed(2); // aplica um desconto de 20% no valor unitário e calcula o valor total com duas casas decimais utilizando o toFixed
  } else if (quantidade >= 5) {
    // verifica se a quantidade comprada é maior ou igual a 5
    valorTotal = (valorUnitario * quantidade * 0.9).toFixed(2); // aplica um desconto de 10% no valor unitário e calcula o valor total com duas casas decimais utilizando o toFixed
  } else {
    // se a quantidade comprada for menor que 5, não há desconto
    valorTotal = (valorUnitario * quantidade).toFixed(2); // calcula o valor total com duas casas decimais utilizando o toFixed
  }

  valorTotal = valorTotal.replace(".", ","); // substitui o ponto por vírgula na string do valor total

  return `O valor total da compra é R$ ${valorTotal}.`; // retorna uma mensagem com o valor total da compra
}
