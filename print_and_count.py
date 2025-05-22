# Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

count = 0 

for i in range(512, 4097):
    if i % 5 == 0:
        print(i)
        count += 1
    
print("total multiple of 5:", count)