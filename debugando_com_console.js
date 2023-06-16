// Exercício 1

function verificaNumero(num) {
  let str = ""; // inicializando uma variável vazia

  if (num % 2 == 0) {
    // verificando o resto da divisão do parâmetro por 2 é 0 - no caso do -12, isso é verdadeiro
    str = "par"; // por ser verdadeiro, atribui a string 'par' à variável str. str agora é 'par'
  } else {
    str = "impar";
  }

  str += ", "; // concatena uma vírgula e um espaço à variável str. str agora é 'par, '

  if (num > 0) {
    // verificando se o número que chega por parâmetro é maior que zero, ou seja, positivo - no caso do -12, isso é falso
    str += "positivo";
  } else {
    // por ser falso, concatena a string 'negativo' na variável str. str agora é 'par, negativo'
    str += "negativo";
  }

  str += " e "; // concatena um espaço, uma letra E e outro espaço na variável str. str agora é 'par, negativo e '

  if (num === parseInt(num)) {
    // verifica se o número que chega por parâmetro é um número inteiro - no caso do -12, é verdadeiro
    str += "não possui casas decimais"; // concatena o texto 'não possui casas decimais' na variável str. str agora é 'par, negativo e não possui casas decimais'
  } else {
    str += "possui casas decimais";
  }

  str = "O numero " + num + " é " + str; // atualiza o valor da variável str, que agora é 'O numero -12 é par, negativo e não possui casas decimais'

  return str; // retorna a variável str atualizada
}

console.log(verificaNumero(-12)); // chamando a função passando o -12 como argumento, este -12 vai ocupar o lugar de 'num' na função

// Exercício 2

const valor = 18;
let result = valor / 2; // declarando result sendo 18/2, que é 9
console.log(result); // vai imprimir 9

result = result / 3; // result agora vai ser 9/3, que é 3
console.log(result); // vai imprimir 3

let isPair = result == 3; // verificando result (que vale 3) é igual a 3
console.log(isPair); // vai imprimir true

if (isPair) {
  // se isPair possuir um valor truthy (true) - mesma coisa que if(isPair == true)
  result = result * 6; // result agora vai ser 3 * 6 = 18
} else {
  result = result * 12;
}

console.log(result); // vai imprimir 18

// Exercício 3

function algarismosEmUmNumero(n) {
  const str = `${n}`; // transformando o número que chega em string (3.141517 -> "3.141517")
  let contagem = str.length; // armazenando o tamanho da string (8)
  console.log(contagem); // vai imprimir 8, pois a string "3.141517" tem 8 caracteres

  if (n != parseInt(n)) {
    //se o número for diferente de ele mesmo convertido para inteiro, ou seja, se for decimal
    console.log("Entrou aqui"); // vai imprimir "Entrou aqui"
    contagem = contagem - 1; // contagem agora vai valer 8 - 1 = 7
  }

  console.log(contagem); // vai imprimir 7

  return contagem; // vai retornar 7
}
algarismosEmUmNumero(3.141517);
