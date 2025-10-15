console.log("hola mundo");
let cajadeyesid="serpiente";
console.log(cajadeyesid);
let frase ='javascript es extremadamente'
console.log(frase.length);
console.log(frase.length);
console.log(frase.toLocaleUpperCase())
console.log(frase.toLocaleLowerCase())
console.log(frase.substring(5,10))


// tipos de datos numericos 
// 1. tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

// 2. notacion cientifica
const cientifica = 5e3

// 3. infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

// operaciones aritmeticas
const suma = 10+5 // 15
const resta = 10-5 // 5
const multiplicacion = 10*5 // 50
const division = 10/5 // 2

// modulo y exponenciacion 
const modulo = 15 % 4 // 3
const exponenciacion = 2 ** 3 // 8

// precision 
const resultado = 0.1 + 0.2
console.log(resultado)
console,log(resuñtado.tofixed(2))
console.log(resultado === 0.3)

// operaciones avanzadas

console.log(*numeros primos entre 1 y s{numeval}*');*/
)
const numeval = 57 

let num1 = 25
let num2 = 1090
let num3 = 220920

const numeval = prompt('ingrese un numero para imprimir:');
let sumpares 

for (let i = 1; i <= numeval; i++) {
    console.log(i);

}

const numeros = [20, 30 , 45, 90, 60]
let minimo = numeros[0]
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < minimo) {
        minimo = numeros[i];
    }
}
console.log(minimo); // salida: 20 

 let nums = [0, 1, 2, 3, 4. 5. 6. 7. 8];
for(let i = 0; i <= 10; i++) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    nums.push(randomNum);
}

console.log('Números generados:', nums);

const numinicial = promt ('ingrese un numero para imprimir');
const numEval = prompt ('ingrese un numero para evaluar') 


const numeros = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

console.log("Array original:", numeros);

const numeroReferencia = 50;
console.log("Número de referencia:", numeroReferencia);

const mayores = numeros.filter(num => num > numeroReferencia);

console.log("Números mayores que", numeroReferencia + ":", mayores);
