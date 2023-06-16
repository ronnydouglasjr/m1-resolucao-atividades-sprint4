//Exercicio 1
function calculaIMC(peso, altura) {
  const alturaAoQuadrado = altura * altura;
  const imc = peso / alturaAoQuadrado;
  return imc;
}

//Exercicio 2
function calculaIdade(nome, anoNascimento, anoFuturo) {
  const idade = anoFuturo - anoNascimento;
  return `Em ${anoFuturo} ${nome} terá ${idade} anos de idade`;
}

//Exercicio 3
function algarismosEmUmNumero(n) {
  const str = `${n}`;
  let contagem = str.length;

  if (n != parseInt(n)) {
    contagem = contagem - 1;
  }

  return contagem;
}

//Exercicio 4
function diaDaSemana(n) {
  let resultado = "";

  if (n == 1) {
    resultado = "Domingo";
  } else if (n == 2) {
    resultado = "Segunda-feira";
  } else if (n == 3) {
    resultado = "Terça-feira";
  } else if (n == 4) {
    resultado = "Quarta-feira";
  } else if (n == 5) {
    resultado = "Quinta-feira";
  } else if (n == 6) {
    resultado = "Sexta-feira";
  } else if (n == 7) {
    resultado = "Sábado";
  } else {
    resultado = "Valor Inválido";
  }

  return resultado;
}
