// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

var num = 512
var count = 0 

while (num < 4096){
    if (num % 5 === 0) {
        console.log(num)
        count++
    }
    num++
}
console.log("total multiples of 5:" + count)