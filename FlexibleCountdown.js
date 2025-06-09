/* Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult 
from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).*/

for (let i = 9; i >= 2; i--){
    if (i % 3 === 0){
        console.log(i)
    }
}

for (let i = 9; i >= 2; i-=3){
    console.log(i)
}

let lowNum = 2
let highNum = 9
let mult = 3

for (let i = highNum; i >= lowNum; i--){
    if (i % mult === 0){
        console.log(i)
    }
}