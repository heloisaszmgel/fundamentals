// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo"

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        let output = "Coding"
        if (i % 10 === 0) {
            output += " Dojo"
        }
        console.log(output)
    } else {
        console.log(i)
    }
}