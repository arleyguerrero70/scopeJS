var firstName; // Declarando -> Se asigna por defecto un valor Undefined
firstName = 'Arlo' // Inicialicé o asigné la función

var lastName = 'Davo' // Declaración e inicialización (asinación) de variable
lastName = 'Ana'  // Reasignación de variable
console.log(lastName)

var secondName = 'Davo' // Declaración y asignación (inicialización) de variable
var secondName = 'Anita' // Redeclaración y reasignar variable
console.log(secondName)

// LET

let fruit = 'Apple' // Declaración y asignación
fruit = 'Kiwi' // Reasignación
console.log(fruit)

//let fruit = 'Apple' // No es posible redeclarar una función tipo LET

// CONST

const animal = 'Leon' // Declaración y asignación
animal = 'Zebra' // Reasignación -> No se puede reasignar una const
console.log(animal)


const vehicles = []
vehicles.push('Carro 1') // Al trabajar con arrays y objetos se estan agregando valores a la referencia por lo cual "se puede modifcar el const"
console.log(vehicles)