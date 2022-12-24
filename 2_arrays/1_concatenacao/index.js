const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
// const array3 = array1.concat(array2) // -> Metodo concat
const array3 = [...array1, ...array2] // -> Metodo spread

console.log(array3)
