function greeting(){
    let userName = 'Ana' // Variable tipo function scope
    console.log(userName)

    if(userName === 'Ana'){
        console.log(`Hello ${userName}`)
    }
}
greeting()

console.log(userName) // UserName no ha sido declarado de forma global