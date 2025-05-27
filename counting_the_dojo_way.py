#  Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo"

for i in range(1, 101):
    if i % 5 == 0:
        output = "Coding"
        if i % 10 == 0:
            output += " Dojo"
        print(output)
    else:
        print(i)