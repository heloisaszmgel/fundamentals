# Based on earlier “Countdown by Fours”, given low_num, high_num, mult, print multiples of mult 
# from high_num down to low_num, using a FOR. For (2,9,3), print 9 6 3 (on successive lines)

for i in range(9, 2, -3):
    print(i)

low_num = 2
high_num = 9
mult = -3

for i in range(high_num, low_num -1, mult): 
    if i % mult == 0:
        print(i) 