# Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for i in range(-300, 1):
    if i % 3 == 0 and i not in [-3, -6]:
        print(i)