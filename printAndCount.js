// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
let count = 0

for (let i = 512; i < 4097; i++){
    if (i % 5 === 0) {
        console.log(i)
        count++
        }
    }
console.log("total multiples of 5: " + count)