// EXERCICIO 1

function testNumber(number) {
  if (number > 0) {
    return "P";
  } else {
    return "N";
  }
}

//EXERCICIO 2

function testNumberLength(number) {
  return number.toString().length;
}

//EXERCICIO 3

function SumNumbers(numA, numB) {
  if (numA > numB) {
    return numA + numB;
  } else {
    return "O primeiro número não maior que o segundo.";
  }
}

//EXERCICIO 4

function verifyFirst(palavra, letra) {
  if (palavra[0].toLowerCase() == letra.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

//EXERCICIO 5

function verifyQuacker(inicio, termino) {
  if (inicio >= 11 && inicio <= 18) {
    return "O /pergunta está em horário de funcionamento.";
  } else {
    return "O /pergunta não está em horário de funcionamento.";
  }
}
