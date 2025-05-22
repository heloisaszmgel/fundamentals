// Print multiples of 6 up to 60,000, using a WHILE.

let num = 1
while (num < 60001){
    if (num % 6 === 0){
        console.log(num)
    }
    num++ //without this the condition is always true and the loop in infinite 
}
