/*
Exercício 1
Desenvolva uma função que mostre no console a frase "Hello World!".
*/
function helloWorld() {
  console.log("Hello World");
}

helloWorld();

/*
Exercício 2
Desenvolva uma função para saber se o(a) aluno(a) possui métricas para virar monitor(a).
Requisitos:

100 de Entregas
100 de Entrevistas Técnicas
100 de Presença
Se os requisitos forem atingidos, retorne "Possível monitor(a)." 
Se os requisitos não forem atingidos, mostre no console "Selecionar outro(a) aluno(a)."
*/

function couldItMonitor() {
  const studentGrade = 100; // variavel local, recebe a nota de entregas do aluno;
  const studentInterview = 100; // variavel local, recebe a nota entrevista tecnica do aluno;
  const studentAttendanceRecord = 100; // variavel local, recebe a nota de presença do aluno.

  if (
    studentGrade >= 100 && // compara nota do aluno com nota de entrega minima para ser monitor
    studentInterview >= 100 && // compara nota do aluno com nota de entrevista minima para ser monitor
    studentAttendanceRecord >= 100 // compara nota do aluno com nota presença minima para ser monitor
  ) {
    return "Possível monitor(a).";
  }

  return "Selecionar outro(a) aluno(a).";
}

console.log(couldItMonitor()); // Resultado: "Possível monitor"

/*
Exercício 3
Desenvolva uma função que recebe três variáveis com valores numéricos
e identifica qual deles é o maior.
*/

const a = 10;
const b = 7;
const c = 13;

function biggestNumber() {
  let biggest = a;

  if (b > biggest) {
    biggest = b;
  }

  if (c > biggest) {
    biggest = c;
  }

  return biggest;
}

console.log(biggestNumber());

/*
Exercício 4
Desenvolva uma função para mostrar no console a seguinte frase: "Meu nome é -nome e sobrenome-, e tenho -idade- anos".

Declare as seguintes variáveis dentro da função:

nome
sobrenome
idade
Dica: Você pode utilizar template string.
*/

function printPersonalInfo() {
  const firstName = "José";
  const lastName = "Silva";
  const age = 30;

  let result = `Meu nome é ${firstName} ${lastName}, e tenho ${age} anos.`;

  console.log(result);
}

printPersonalInfo(); // Resultado: "Meu nome é José Silva e tenho 30 anos."
