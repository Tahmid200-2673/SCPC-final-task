/* Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.*/
function romanToInt(s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (roman[s[i]] < roman[s[i + 1]]) {
            result -= roman[s[i]];
        } else {
            result += roman[s[i]];
        }
    }
    return result;
}

console.log(romanToInt("IX")); 
console.log(romanToInt("XXI"));