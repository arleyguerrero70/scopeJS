// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins+= coins
//     console.log(`Moneybox: ${saveCoins}`)
// }

function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`Moneybox: $${saveCoins}`)
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(5)
myMoneyBox(15)

const moneyBoxAna = moneyBox();

moneyBoxAna(50)
moneyBoxAna(50)