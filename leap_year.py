# Write a function that determines whether a given year is a leap year. 
# If a year is divisible by four, it is a leap year, unless it is divisible by 100. 
# However, if it is divisible by 400, then it is.


def leap_year(year):
    if year % 4 == 0:
        if year % 100 == 0:
            return year % 400 == 0
        return True
    return False

print(leap_year(2023))