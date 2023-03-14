 function fruits(){
    if (true){
        var fruit1 = 'Apple' // Var siempre será una varible de scope Global
        let fruit2 = 'Kiwi' // variable de bloque. LA MEJOR PRÁCTICA
        const fruit3 = 'Banana' // variable de bloque.

        console.log(fruit1) // Solo serán utilizables estas variables dentro del bloque
        console.log(fruit2) // Solo serán utilizables estas variables dentro del bloque
    }
    // console.log(fruit1)
    // console.log(fruit2)
    console.log(fruit3)
 }
fruits()