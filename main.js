const num = [1, 2, 3, 4, 5]
    // const liczby = num.find(item => item === 2)
    // num.push('Jaro', 6, 'Marzena')
    // console.log(num)

// const items = ['Radosław', 'Robert', 'Jaro', 'Rodo']
// const imiona = items.find(item => item === 3)
// num.push(1, 2, 3)
// console.log(items)

// const ciagFibonacciego = new Array()

// for (let i = 1; i < 101; i++) {
//     ciagFibonacciego.push(i)
// }

// console.log(ciagFibonacciego)

// let fibonacci = [0, 1];

// function listFibonacci(num) {
//     for (let i = 1; i < num; i++) {
//         fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
//     }
//     // const letter = i
//     if (fibonacci[i] + fibonacci[i - 1] === 3) {
//         fibonacci.push(2)
//     } else {
//         fibonacci.push(fibonacci[i] + fibonacci[i - 1])
//     }
//     console.log(fibonacci);
// }

// listFibonacci(11);

// const fibo2 = new Array(0, 1);
// if (fibo2[fibo2.length - 1] < 100 && fibo2[fibo2.length - 1] > 1) {
//     let next = [fibo2.length - 1] + fibo2[fibo2.length - 2]
//     num.push(next)
// }

// console.log(num)

// const tablicaImiona = ["Artur", "Marzena", "Marta", "Magdalena", "Martyna", "Mordora", "Alicja", "Oskar", "Radosław", "Robert"]
// console.log(tablicaImiona)

const tablicaImion = new Array()
for (let i = 0; i < 5; i++) {
    tablicaImion.push("Artur", "Marzena", "Marta", "Magdalena", "Martyna", "Mordora", "Alicja", "Oskar", "Radosław", "Robert")
}
console.log(tablicaImion)

const names = ['Marzena', 'Jaro', 'Alicja', 'Magdalena', 'Robert']

const i = 1
const numbersTillHundred = new Array()

for (let i = 1; i < 101; i++) {
    numbersTillHundred.push(i + 1)
    numbersTillHundred.pop()
}
console.log(numbersTillHundred)