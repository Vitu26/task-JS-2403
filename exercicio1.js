// 1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console 
// let nome = prompt("Escreva seu nome") 

// alert("Seu nome é " +nome) 

// console.log(nome) 

// 2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números. 

// let num1 = parseInt(prompt("Digite um numero")) 

// let num2 = parseInt(prompt("Digite outro numero")) 

// console.log(num1 + num2)

// 3.	Crie um script que leia duas notas do usuário e calcule a média do aluno. 

// let nota1 = parseInt(prompt("Escreva sua primeira nota")) 

// let nota2 = parseInt(prompt("Escreva sua segunda nota")) 

// console.log((nota1 + nota2)/2) 

// 4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele. 

// let data1 = prompt("Escreva seu ano de nascimento: ") 

// let data2 = prompt("Escreva o ano atual") 

// console.log (data2 - data1) 

// 5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês. 

// let valor1 = prompt("Qual valor da sua hora trabalhada?") 

//  let hora = prompt ("Quantas horas você trabalha por dia?") 
//  console.log ((valor1 * hora)*30) 


// 6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.   
// ( C = 5 * ((F-32) / 9)). 
// let grau = prompt("Informe a temperatura em F") 
// console.log (5 * ((grau-32) / 9)) 


// EstruturaDeDecisao 

// 1.	Faça um Programa que peça dois números e imprima o maior deles. 

// let num1 =parseInt(prompt("Digite o primeiro número"))  

// let num2 =parseInt(prompt("Digite o segundo numero")) 

// if (num1 > num2) {  

//     console.log("Este numero é o maior "+num1)  

// } else {  

//     console.log("Este numero é o maior "+num2)  

// } 


// 2.	Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo. 


// let num =parseInt(prompt("Digite um número")) 

// if (num >= 0) { 

//     console.log("Este numero é positivo") 

// } else { 

//     console.log("Este numero é negativo") 

// 3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido. 

// let sexo = prompt("Digite seu sexo").toLowerCase(); 

// if (sexo === "f" ) { 

//     console.log("Feminino") 

// } else if (sexo === "m")  { 

//     console.log("Masculino") 

// } else { 

//     console.log ("Sexo invalido") 

// 4.	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar: 

// 1.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete; 

// 2.	A mensagem "Reprovado", se a média for menor do que sete; 

// 3.	A mensagem "Aprovado com Distinção", se a média for igual a dez. 

 

// let nota1 = parseInt(prompt("Escreva sua primeira nota"))  
// let nota2 = parseInt(prompt("Escreva sua segunda nota"))  
// let media = ((nota1 + nota2)/2) 
 
// console.log((nota1 + nota2)/2)  

// if (console.log >= 7) { 

//     alert("Aprovado. Sua nota é "+media) 

// } else if (console.log === 10 ) {  

//     alert("Aprovado com Distinção! Sua nota foi "+media) 

// } else { 

//     alert("Reprovado. Sua nota foi "+media) 

// } 



// 5.	Faça um Programa que leia três números e mostre o maior e o menor deles. 

// let num1 = prompt("Informe o primeiro numero") 

// let num2 = prompt("Informe o segundo numero") 

// let num3 = prompt("Informe o terceiro numero") 

// if ( num1 > num2, num1 > num3, num2 > num3 ) { 

//     console.log("Seu maior numero é "+num1,"Seu menor numero é "+num3) 

// } else if (num1 < num2, num2 > num3, num3 < num1) { 

//     console.log("Seu maior numero é "+num2,"Seu menor numero é "+num3) 

// } else if (  num1 > num2, num1 > num3, num3 > num2) { 

//     console.log("Seu maior numero é "+num1,"Seu menor numero é "+num2) 

// } else if (num1 < num2, num2 > num3, num3 > num1) { 

//     console.log("Seu maior numero é "+num2,"Seu menor numero é "+num1) 

// } else if (num3 > num2, num3 > num1, num2 > num1) { 

//     console.log("Seu maior numero é "+num3,"Seu menor numero é "+num1) 

// }else { 

//     console.log("Seu maior numero é "+num3,"Seu menor numero é "+num2) 

// } 

// 6.	Faça um Programa que leia dois números e mostre se ele é par ou ímpar. 

// let num =parseInt(prompt("Digite um número")) 

// if (num % 2 == 0) { 

//     console.log("Este numero é par") 

// } else { 

//     console.log("Este numero é impar") 

// }

// Estrutura de repetição

// 1.	Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

// while (true) { 

//     let nota = prompt("Digite uma nota"); 

 
 

//     if (nota >= 0 &&  nota <= 10) { 

//         alert("Sua nota eh: " +nota) 

//         break; 

//     } else { 

//         console.log("nota invalida"); 


//3.	Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.


// while (true) {  


//     let login = prompt("Digite o seu login");  

//     let pass = prompt("Digite sua senha"); 


//     if (login === pass) {  

//         alert("Senha e login iguais"); 

//     } else {  

//         alert("Cadastro realizado") 

//         break; 
//     }
// }


// 4.	Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. 

// let j = 0; 

// for (let i = 0 ; i < 20; i++) { 

//     j = i + 1 

//     console.log(i,j); 


// 5.	Faça um programa que leia 5 números e informe o maior número.

// for(let i = 0; i<= 5; i++){ 
//     let input = parseInt(prompt("Digite um valor"));  
//     if (i === 0) { 

//         maior = input; 

//     } 
//     if (input > maior){ 

//         maior = input; 
//     } 
// } 

// alert(maior) 

// 6.	Faça um programa que leia 5 números e informe a soma e a média dos números.



// 7.	Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
// let input = ("Valores ímpares:");
// for ( i = 0; i < 50; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }



// 8.	Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
// a.	Tabuada de 5:
// b.	5 X 1 = 5
// c.	5 X 2 = 10
// d.	...
// e.	5 X 10 = 50

// var tabuada = 5
//     for(let i = 1; i <= 10; i++)
//     {
//       console.log(`${tabuada} vezes ${i} é ${tabuada * i}`);
//     }

// Desafio FizzBuzz

// 9.	Dado um número n, para cada número entre 1 e 100, imprime um valor por linha da seguinte maneira:
// Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
// Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
// Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
// Se i não for múltiplo de 3 ou 5, imprima o valor de i.

// let n = 1; 

// while (n <= 100) { 

//     if ((n % 3) == 0 || (n % 5) == 0) { 

//         if ((n % 3) == 0 && (n % 5) == 0) { 

//             console.log("FizzBuzz"); 

//         } 

//         else if (n % 3 == 0 && (n % 5) !== 0) { 

//             console.log("Fizz"); 

//         } 

//         else if ((n % 5) == 0 && (n % 3) !== 0) { 

//             console.log("Buzz"); 

//         } 

//     } 

//     else { 

//         console.log(n); 

//     } 
// n = n + 1; 
// }

// ExerciciosListas:

// 1.	Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.

// let minhaLista = [1, 2, 3, 4, 10] 

// for (let i = 0; i < minhaLista.length; i++) { 

//     console.log(minhaLista[i]) 

// } 

// 2.	Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

// let lista = [1,2,3,4,5,6,7,8,9,10] 

// for(i = lista.length -1; i >= 0; i--){ 

//     console.log("Numero: "+lista[i]); 

// 3.	Faça um Programa que leia 4 notas, mostre as notas e a média na tela.


//     let nota1 =  parseInt(prompt("Primeira nota: "));
//     let nota2 =  parseInt(prompt("Segunda nota: "));
//     let nota3 =  parseInt(prompt("Terceira nota: "));
//     let nota4 =  parseInt(prompt("Quarta nota: "));
    
//    console.log("Sua primeira nota "+nota1," Sua segunda nota "+nota2," Sua terceira nota "+nota3," Sua quarta nota "+nota4," Sua media "+((nota1+nota2+nota3+nota4))/4);

// 4.	Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.



// 5.	Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor ímpar. Imprima os três vetores.


// 6.	Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.


// 8.	Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.

// 10.	Cria um script que receba o nome de várias pessoas até o usuário desejar parar o programa, bote o nome dessas pessoas em uma lista e sorteie duas dessas pessoas para te dar um presente.
// As pessoas não podem ser repetidas.
// O output do código deve ter o seguinte formato:
// “{nomeDaPessoa} e { nomeDaOutra } foram sorteados para te dar um presente!”

// Exercícios Funções:

// 1.	Crie uma função que receba um inteiro e diga se ele é “Par” para números pares ou “Ímpar” para números impares.

// let nume = parseInt(prompt("Digite um numero")) 

//     function parimpar(nume) { 

//         if (nume % 2 === 0){ 

//         return(console.log("numero é par")); 

//         } else { 

//             return(console.log("numero é impar")); 

//         } 

//     } 

//  parimpar(); 

// 2.	Crie uma função que receba dois números e retorne o resultado da soma entre eles. 
// function operadois(num1, num2) {


//     console.log(parseInt(num1) + parseInt(num2));  
    
// }   
// operadois( 4, 8)


// 3.	Crie uma função que receba um número e retorne o oposto desse número. Exemplos de retornos:
// negativo(1) // return -1
// negativo(-5) // return 5

// let oposto = prompt("Digite um número")
// function oposta (oposto) {
//     return(console.log(oposto *(-1)))

// }
// oposta(oposto)

// 4.	Crie uma função que receba um array de números, e retorne a suma de todos os números positivos desse array. Exemplos de retornos:
// somaDePositivos([1,-4,7,12]) // 1 + 7 + 12 = 20 -> return 20

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function buscarNumerosPares (value) {
    if (value % 2 == 0) 
    return value;
}
let numerosPares = numeros.filter(buscarNumerosPares);
console.log(parseInt(numerosPares) + parseInt(numerosPares));



// 5.	Dado um array de números inteiros, crie uma função que retorne o valor do menor número desse array. Exemplos de outputs:

// Dado [34, 15, 88, -2] sua solução deve retornar o -2
// Dado [34, -500, -1, 100] sua solução deve retornar o -345

// Array.min = function(array) {
//     return Math.min.apply(Math, array);
// };
// var random = [7, 3, 4, 9, 6, 5]; 
// console.log( Array.min(random) );


 


