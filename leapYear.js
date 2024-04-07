/* Write a function that determines whether a given year is a leap year. 
If a year is divisible by four, it is a leap year, unless it is divisible by 100. 
However, if it is divisible by 400, then it is. */

function isLeapYear(year){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true
    } else {
        return false
    }
}

console.log(isLeapYear(2000))
console.log(isLeapYear(2020))
console.log(isLeapYear(1968))
console.log(isLeapYear(1759))