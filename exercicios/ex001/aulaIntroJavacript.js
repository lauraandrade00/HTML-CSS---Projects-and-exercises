function evencount(array) {
console.log ('Vamos analisar os números pares');
let evenNums = [];
for ( let i  = 0;  i < array.length;  i++)
    if (array[i] % 2 === 0 ){
        evenNums.push(array[i]);
    } else {
console.log('${array[i]} não é par.')
    }

console.log(evenNums);
}
let array = [1, 2, 4, 5, 7, 8];
evencount(array);