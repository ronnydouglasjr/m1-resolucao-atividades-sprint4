// Exercício 1

function somaReutilizavel(a, b) {
  return a + b;
}

let resultado = 0;
resultado = somaReutilizavel(10, 10) * 5;

console.log(resultado);

// Exercício 2

function letraInicial(nome, sobrenome) {
  const primeiraLetraNome = nome[0].toUpperCase();
  const primeiraLetraSobrenome = sobrenome[0].toUpperCase();
  return `${primeiraLetraNome} e ${primeiraLetraSobrenome}`;
}

function nomeCompleto() {
  const iniciais = letraInicial("vilson", "padilha");
  return `As letras inicias do meu nome completo são ${iniciais}`;
}

console.log(nomeCompleto());

// Exercício 3

function par(n) {
  if (n % 2 === 0) {
    return true;
  }

  return false;
}

function impar(n) {
  if (n % 2 !== 0) {
    return true;
  }

  return false;
}

function letrasProduto(produto) {
  let result = "";

  if (par(produto.length)) {
    result = "par";
  } else if (impar(produto.length)) {
    result = "impar";
  }

  return `O número de letras deste produto é ${result}`;
}
