// Global Scope
var fruit = 'apple'; // Variable global

function bestFruit () {
    console.log(fruit)
}

bestFruit()

function countries(){
    country = 'Colombia' // Al no declarar el tipo de variable se convierte en global MALA PRÁCTICA
    console.log(country)
}

countries()
console.log(country)