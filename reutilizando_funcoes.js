// Exercício 1

function somaReutilizavel(a, b) {
  // criamos um função que recebe dois paramentros, nomeamos estes paramentros nomo a e b. Vale lembrar que o nome do paramentro pode ser qualquer um.
  return a + b; // aqui definimos que o retorno da nossa função será a soma dos paramentros, assim usamos a notação return a+b
}

//ABAIXO VAMOS TESTAR NOSSA FUNÇÃO:

let resultado = 0; // Nesta linha criamos uma variável que armazenará a soma posteriormente, definimos seu valor inicial como zero mas este valor mudar nas próximas linhas.
resultado = somaReutilizavel(10, 10) * 5; //nesta linha usamos a nossa funçao para fazer a soma e em sequençoa multiplicamos este resultado por 5. neste exemplo a notação que simulamos seria (10+10) +5. Veja que o cálculo (10+10) foi realizado pela nossa função.

console.log(resultado); // aqui apenas exibimos no console o resultado da nossa operação, vale lembrar que guardamos o resultado na variável resultado.

// Exercício 2

function letraInicial(nome, sobrenome) {
  // nesta linha criamos nossa função passando os dois paramentros, por boas práticas definimos como nome e sobrenome, mas os paramentros podem ser declarado com qualquer nome.
  const primeiraLetraNome = nome[0].toUpperCase(); // neste momento usamos colchetes [] para acessar a letra na posição desejada, neste caso precisamos da primeira letra, portanto usamos nome[0]. Por fim este valor é armazenado na variável criada "primeiraLetraNome"
  const primeiraLetraSobrenome = sobrenome[0].toUpperCase(); // mesma lógica anterior, mas agora com o sobrenome.
  return `${primeiraLetraNome} e ${primeiraLetraSobrenome}`; // por fim definimos que o retorno da função será um string contendo os valores das variácveis que criamos anteriormente. Para isso usamos a notação template string ${}. Caso tenha dúvida sobre esta notação consulte a documentação.
}

function nomeCompleto() {
  // Neste momento criamos uma segunda função que fará a verificação de um nome. Veja que neste caso não usamos paramentros.
  const iniciais = letraInicial("vilson", "padilha"); // nesta linha usamos a função anterir para nos devolver as letras iniciais e guardamos este retorno na variável iniciais.
  return `As letras inicias do meu nome completo são ${iniciais}`; // por fim retornamos um string padronizada adicionada ao retorno das nossas iniciais, para formatação corretas utilizamos template string mais uma vez.
}

console.log(nomeCompleto()); // aqui imprimimos no console todo o retorno das funçãoes criadas anteriormente.

// Exercício 3

function par(n) {
  // nesta função vamos testar se um número é par, o retorno deve ser um boolean.
  if (n % 2 === 0) {
    // nesta condicional verificamos se o paramentro n dividido por 2 poissui resto 0, esta é uma maneira de verificar se o número é par. todo número que tiver resto zero em uma divisão por 2 será par.
    return true; // caso nossa condicional seja verdadeira é sinal que temos um número par, portanto devemos retornar o boleano true.
  }

  return false; // casoa condicional nos retorne falso é sinal que o número não é par, portanto retornamos false.
}

function impar(n) {
  // nesta função faremos o contŕario da anterior, vamos testar se um número n é ímpar.
  if (n % 2 !== 0) {
    // sabemos que quando um número não á par consequentemente ele será impar, portando usamos a mesma verificação anterior mas agora usado o diferente !==, assim sabemos que caso o resto da divisão seja diferente de zero temos um número ímpar.
    return true; // caso a condicional seja verdadeira, divisão por dois NÃO tiver resto zero poderemos inferir que o número é ímpar e retornar true.
  }

  return false; // caso a validação anterior seja falsa o primeiro retorno não acontecerá logo deveremos retornar o segundo caso que é false.
}

function letrasProduto(produto) {
  // nesta função testaremos se o paramentro produto(String) terá a quantidade de letras (tamanho), par ou impar.
  let result = "";

  if (par(produto.length)) {
    // nesta verificação usamos a função par() para testar se o tamanho da palavra contida em produto (produto.length) é um número par ou impar. Como sabemos que a função par() nos retorna um valor boleano (true / false) podemos usar este mesmo retorno para validar com o if, assim se a função retornar true consequentemente o if será verdadeiro.
    result = "par"; // uma vez verdadeiro, podemos retorna a string que representa o tamanho da nossa palavra produto, no caso "par"
  } else if (impar(produto.length)) {
    // nesta validação usamos a mesma lógica anterior mas desta vez usando a função impar(), assim caso o número seja impar nosso if será verdadeiro.
    result = "impar"; // por fim caso o tamanho da palavra contida em produto seja impar retornamos a string "impar"
  }
}
