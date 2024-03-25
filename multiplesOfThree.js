// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for (var num = -300; num <= 0; num = num += 3){ 
    if (num === -3 || num === -6) {
        continue
    }
    console.log(num)
}