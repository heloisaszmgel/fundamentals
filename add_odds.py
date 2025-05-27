#  Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

sum = 0

for i in range(-299999, 300000, 2):
    sum += i

print(sum)