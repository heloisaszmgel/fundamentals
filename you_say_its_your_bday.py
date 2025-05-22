# If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day..." 

birth_month = 8
birth_day = 28

for i in range(1, 13):  # Months: 1 to 12
    for j in range(1, 32):  # Days: 1 to 31
        if (i == birth_month and j == birth_day) or (i == birth_day and j == birth_month):
            print("How did you know?")
        else:
            print("Just another day...")