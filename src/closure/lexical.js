const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ //función interna
        const inner = 2;
        console.log(myNumber)
        console.log(myGlobal)

        function child(){
            console.log(inner)
            console.log(myNumber)
            console.log(myGlobal)
        }

        return child()
    }

    return parent()
}

myFunction();