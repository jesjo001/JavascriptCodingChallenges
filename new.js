const objectA = { name: 'Elana', age :12 }
const objectB = objectA;
objectB.name = 'Emilie';
console.log(objectA === objectB)
console.log(objectA.name === objectB.name === 'E')
console.log(objectA.name === 'Elena')