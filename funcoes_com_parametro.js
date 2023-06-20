// EXERCICIO 1 Desenvolva uma função com apenas um parâmetro. A função deve retornar o valor de caractere P se o parâmetro for positivo,
// e N se o parâmetro for zero ou negativo.

function testNumber(number) {
  //declaração da função com um paramentro 'number'

  //Para fazer a verificação do parâmetro precisamos criar uma condicional "if"
  //A regra da atividade é que retornemos "P" quando o número for maior que zero, podemos verificar isto na expressão `if (number > 0)`.
  //Como o paramentro number só possui duas opções, (maior que zero ou não) podemos usar o else para o segundo caso e retornar "N"

  if (number > 0) {
    // verifica se o paramentro é maior que zero
    return "P"; // se o parametro for maior que zzero retorna "P"
  } else {
    // Caso a primeira validação não seja verdadeira, executamos a segunda opção, retornar "N"
    return "N";
  }
}

//EXERCICIO 2 - Desenvolva uma função que informe a quantidade de dígitos de um determinado número inteiro informado por parâmetro.

function testNumberLength(number) {
  //declaração da função com um paramentro 'number'
  // uma maneira simples de saber a quantidades de caracteres é usando a propriedade ".length", assim temos o "tamanho" de um elemento.
  // entretanto, o tipo Number não possui esta propriedade, de usarmos um '.length' em uma variávem número teríamos um retorno de 'undefined'.
  // para contornar este problema usamos o método toString() combinado com o .length (.toString().length) para fazer uma conversão de Number para string antes de obter o .length do elemento.
  /*
EXEMPLO

const x = 120  // aqui temo o número 120, tipo este que não possui a propriedade .length
const xString = x.toString()  // agora a variável 'xString' tem um valor de  "120", uma string de caragteres numéricos.
const tamanhoDeX = xString.length //  como a variável xString possui a propriedade .length, podemos capturar este valor e dizer que é o tamanho do nosso número inicial x (120) 
*/
  return number.toString().length; // aqui é uma forma te fazer todos os passos citados acima em uma única linha, compinando o método toString() com a propriedade .length
}

//EXERCICIO 3 - Desenvolva uma função que some dois números passados por parâmetro. A soma só deve acontecer se o primeiro número passado por parâmetro for maior que o segundo.
// Caso contrário você deverá retornar a seguinte frase: "O primeiro número não é maior que o segundo."

function SumNumbers(numA, numB) {
  // Declaração da função com dois paramentros a serem comparados.

  // precisamos usar uma condicional para verificar a primeira regra do exercício (primeiro número passado por parâmetro for maior que o segundo.)
  // caso a primeira condicional seja verdade, devemos retornar a soma dos paramentros numA + numB.
  // de acordo com o exercício, caso a primeira condição seja falsa, devemos retornar uma string "O primeiro número não é maior que o segundo."

  if (numA > numB) {
    // fazemos a primeira verificação, se numA é maior que numB, para isso usamos o operador de comparação ">"
    return numA + numB; // uma vez sendo verdade a comparação acima, retornamos a noma dos parametros.
  } else {
    // caso a verifiicação (numA > Numb) não seja verdade, só temos uma alternativa, que é retornar a frase solicitada. Por este motivo usamos o else, e não uma nova verificação.
    return "O primeiro número não maior que o segundo."; // uma vez que o nosso if foi falso e caimos no ense, vamos terornar a frase.
  }
}

//EXERCICIO 4

/*Desenvolva uma função com 2 parâmetros. O primeiro deve se chamar palavra, e o segundo deve se chamar letra. Se a palavra passada no primeiro parâmetro começar com a letra passada como segundo parâmetro, retorne true. Se a palavra passada no primeiro parâmetro não começar com a letra passada no segundo parâmetro, retorne false.*/

function verifyFirst(palavra, letra) {
  // criação da função com os dois paramentros.

  /* para solucionar este exercício precisamos acessar a primeira letra do paramentro palavra, para isso podemos acessar a posição de uma string usando a seguinte notação:
  palavra[i], onde i é o indice (posição) que queremos acessar. No caso da primeira letra seria o índice 0, logo usaremos palavra[0].*/

  /*
  Um segundo problema que podemos nos deparar é com as letras maiúscula e minúscula, EX:

  a palavra "Pato" começa com a letra "p"?
  se a nossa intenção é apenas saber a letra e ignorar a diferença entre "p" e "P" a resposta é sim. 
  entretanto se fizermos a comparação de "P" == "p" teremos que isso é falso.
  para resolver este problema, podemos converter ambas as letras para maiúsculo ou minúsculo independente de como sejam. Assim garantimos que sempre vamos comparar letras "padronizadas"*/

  if (palavra[0].toLowerCase() == letra.toLowerCase()) {
    // Verficia se a primeira letra da palava transformada em minícula é igual a letra também minúsucula.
    return true; // Se forem iguais, retorna true
  } else {
    return false; // se forem diferentes (condição falsa) retorna false
  }
}

//EXERCICIO 5

/*

Desenvolva uma função com dois parâmetros para saber se o horário corresponde com o funcionamento do /pergunta. O primeiro parâmetro deve-se chamar inicio, e o segundo deve-se chamar termino. Se o horário de inicio for maior ou igual a 11 e menor ou igual a 19, retorne "O /pergunta está em horário de funcionamento." Caso contrário retorne "O /pergunta não está em horário de funcionamento."

*/

function verifyQuacker(horaAtendimento) {
  // criamos uma função que receberá a hora que dado atendimento é solicitado, neste caso não precisamos nos preocupar com os minutos.
  if (horaAtendimento >= 11 && horaAtendimento < 23) {
    // fazemos as duas verificações neste if, afim de verificar se o paramentro está entre 11 e 23.
    return "O /pergunta está em horário de funcionamento."; // caso a condicional seja verdadeira, retornamos a frase condizente
  } else {
    return "O /pergunta não está em horário de funcionamento."; // caso seja falsa retornamos a frase condizente.
  }
}
